import Dexie, { type Table } from 'dexie'
import type { Animal, Bet, Game, AnimalGameMeta, Setting } from '../types'
import { DEFAULT_ANIMALS } from '../data/default-animals'
import { SEEDED_GAMES } from '../data/seeded-games'

export class LuckyDrawDB extends Dexie {
  animals!: Table<Animal, number>
  bets!: Table<Bet, number>
  games!: Table<Game, number>
  settings!: Table<Setting, string>
  animalGameMeta!: Table<AnimalGameMeta, number>

  constructor() {
    super('LuckyDrawDB')

    // ============================================================
    // DATABASE SCHEMA VERSIONS
    // ============================================================

    this.version(1).stores({
      animals: '++id, order',
      bets: '++id, animalId',
    })

    this.version(2).stores({
      animals: '++id, order',
      bets: '++id, animalId',
    }).upgrade(tx => {
      return tx.table('animals').toCollection().modify((animal: Record<string, unknown>) => {
        const match = DEFAULT_ANIMALS.find(a => a.order === animal.order)
        if (match) {
          animal.name = match.name
          animal.otherName = match.otherName
        }
        if (!animal.notes) animal.notes = ''
      })
    })

    this.version(3).stores({
      animals: '++id, order',
      bets: '++id, animalId',
    }).upgrade(tx => {
      return tx.table('animals').toCollection().modify((animal: Record<string, unknown>) => {
        if (!animal.tags) animal.tags = ''
      })
    })

    this.version(4).stores({
      animals: '++id, order',
      bets: '++id, animalId, gameId',
      games: '++id',
      settings: 'key',
    }).upgrade(async tx => {
      const gameId = await tx.table('games').add({
        name: 'Ván 1',
        createdAt: Date.now(),
      })
      await tx.table('bets').toCollection().modify((bet: Record<string, unknown>) => {
        bet.gameId = gameId
      })
      await tx.table('settings').add({
        key: 'activeGameId',
        value: gameId,
      })
    })

    this.version(5).stores({
      animals: '++id, order',
      bets: '++id, animalId, gameId',
      games: '++id',
      settings: 'key',
    }).upgrade(async tx => {
      await tx.table('animals').toCollection().modify((animal: Record<string, unknown>) => {
        if (!animal.defaultTags) animal.defaultTags = ''
        if (!animal.defaultNotes) animal.defaultNotes = ''
      })
    })

    this.version(6).stores({
      animals: '++id, order',
      bets: '++id, animalId, gameId',
      games: '++id',
      settings: 'key',
      animalGameMeta: '++id, [gameId+animalId], gameId, animalId',
    }).upgrade(async tx => {
      const animals = await tx.table('animals').toArray() as Animal[]
      const games = await tx.table('games').toArray() as Game[]

      for (const game of games) {
        for (const animal of animals) {
          await tx.table('animalGameMeta').add({
            gameId: game.id,
            animalId: animal.id,
            tags: (animal as Animal & { tags?: string }).tags || '',
            notes: (animal as Animal & { notes?: string }).notes || '',
          })
        }
      }

      await tx.table('animals').toCollection().modify((animal: Record<string, unknown>) => {
        delete animal.tags
        delete animal.notes
      })
    })

    // ============================================================
    // AUTO-SYNC: On every page load, push defaultTags/defaultNotes
    // from source code into the DB so all devices stay in sync
    // after a new deploy (no version bump needed for default changes).
    // ============================================================
    this.on('ready', async () => {
      await Promise.all(DEFAULT_ANIMALS.map(async (def) => {
        const animal = await this.animals.where('order').equals(def.order).first()
        if (animal) {
          await this.animals.update(animal.id, {
            defaultTags: def.defaultTags || '',
            defaultNotes: def.defaultNotes || '',
          })
        }
      }))

      await importSeededGames(this)
    })

    // ============================================================
    // FRESH INSTALL (populate runs only when DB is brand new)
    // ============================================================
    this.on('populate', async () => {
      await this.animals.bulkAdd(
        DEFAULT_ANIMALS.map(a => ({
          name: a.name,
          otherName: a.otherName,
          order: a.order,
          defaultTags: a.defaultTags || '',
          defaultNotes: a.defaultNotes || '',
        })) as Animal[]
      )

      const gameId = await this.games.add({
        name: 'Ván 1',
        createdAt: Date.now(),
      } as Game)
      await this.settings.add({ key: 'activeGameId', value: gameId } as Setting)

      const animalRecords = await this.animals.toArray()
      await this.animalGameMeta.bulkAdd(animalRecords.map(animal => ({
        gameId,
        animalId: animal.id,
        tags: animal.defaultTags || '',
        notes: animal.defaultNotes || '',
      })) as AnimalGameMeta[])
    })
  }
}

export const db = new LuckyDrawDB()

// Import SEEDED_GAMES entries that haven't been imported yet on this device
async function importSeededGames(database: LuckyDrawDB): Promise<void> {
  if (!SEEDED_GAMES || SEEDED_GAMES.length === 0) return

  const existingGames = await database.games.toArray()
  const existingSeedIds = new Set(
    existingGames.map(g => g.seedId).filter((id): id is string => Boolean(id))
  )

  const animals = await database.animals.orderBy('order').toArray()
  const animalByOrder: Record<number, Animal> = {}
  animals.forEach(a => { animalByOrder[a.order] = a })

  for (const seeded of SEEDED_GAMES) {
    if (existingSeedIds.has(seeded.seedId)) continue

    const gameId = await database.games.add({
      name: seeded.name,
      createdAt: Date.now(),
      seedId: seeded.seedId,
    } as Game)

    await database.animalGameMeta.bulkAdd(animals.map(animal => ({
      gameId,
      animalId: animal.id,
      tags: animal.defaultTags || '',
      notes: animal.defaultNotes || '',
    })) as AnimalGameMeta[])

    if (seeded.bets && seeded.bets.length > 0) {
      const betsToAdd = seeded.bets
        .map(b => ({
          animalId: animalByOrder[b.animalOrder]?.id,
          amount: b.amount,
          gameId,
        }))
        .filter((b): b is { animalId: number; amount: number; gameId: number } =>
          b.animalId != null
        )
      if (betsToAdd.length > 0) await database.bets.bulkAdd(betsToAdd as Bet[])
    }

    if (seeded.meta && seeded.meta.length > 0) {
      for (const m of seeded.meta) {
        const animal = animalByOrder[m.animalOrder]
        if (!animal) continue
        const existing = await database.animalGameMeta
          .where('[gameId+animalId]').equals([gameId, animal.id]).first()
        if (existing) {
          await database.animalGameMeta.update(existing.id, { tags: m.tags, notes: m.notes })
        }
      }
    }
  }
}
