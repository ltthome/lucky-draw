import type { ExportedGameData, Animal, Game, AnimalGameMeta, Bet } from '../types'
import { db } from './database'

export async function createGame(name: string): Promise<number> {
  const gameId = await db.games.add({
    name,
    createdAt: Date.now(),
  } as Game)

  const animals = await db.animals.toArray()
  await db.animalGameMeta.bulkAdd(animals.map(animal => ({
    gameId,
    animalId: animal.id,
    tags: animal.defaultTags || '',
    notes: animal.defaultNotes || '',
  })) as AnimalGameMeta[])

  await db.settings.put({ key: 'activeGameId', value: gameId })
  return gameId
}

export async function switchGame(gameId: number): Promise<void> {
  await db.settings.put({ key: 'activeGameId', value: gameId })
}

export async function deleteGame(gameId: number): Promise<void> {
  await db.bets.where('gameId').equals(gameId).delete()
  await db.animalGameMeta.where('gameId').equals(gameId).delete()
  await db.games.delete(gameId)
  const activeSetting = await db.settings.get('activeGameId')
  if (activeSetting?.value === gameId) {
    const remaining = await db.games.orderBy('id').last()
    if (remaining) {
      await db.settings.put({ key: 'activeGameId', value: remaining.id })
    }
  }
}

export async function copyGame(sourceGameId: number, newName: string): Promise<number> {
  const newGameId = await db.games.add({
    name: newName,
    createdAt: Date.now(),
  } as Game)

  const sourceBets = await db.bets.where('gameId').equals(sourceGameId).toArray()
  if (sourceBets.length > 0) {
    await db.bets.bulkAdd(sourceBets.map(bet => ({
      animalId: bet.animalId,
      amount: bet.amount,
      gameId: newGameId,
    })) as Bet[])
  }

  const sourceMeta = await db.animalGameMeta.where('gameId').equals(sourceGameId).toArray()
  if (sourceMeta.length > 0) {
    await db.animalGameMeta.bulkAdd(sourceMeta.map(meta => ({
      gameId: newGameId,
      animalId: meta.animalId,
      tags: meta.tags,
      notes: meta.notes,
    })) as AnimalGameMeta[])
  }

  await db.settings.put({ key: 'activeGameId', value: newGameId })
  return newGameId
}

export async function copyGameAsSum(sourceGameId: number, newName: string): Promise<number> {
  const newGameId = await db.games.add({
    name: newName,
    createdAt: Date.now(),
  } as Game)

  const sourceBets = await db.bets.where('gameId').equals(sourceGameId).toArray()
  const animalTotals = sourceBets.reduce<Record<number, number>>((acc, bet) => {
    acc[bet.animalId] = (acc[bet.animalId] || 0) + bet.amount
    return acc
  }, {})

  const summedBets = Object.entries(animalTotals)
    .filter(([, total]) => total > 0)
    .map(([animalId, total]) => ({
      animalId: parseInt(animalId),
      amount: total,
      gameId: newGameId,
    }))

  if (summedBets.length > 0) {
    await db.bets.bulkAdd(summedBets as Bet[])
  }

  const sourceMeta = await db.animalGameMeta.where('gameId').equals(sourceGameId).toArray()
  if (sourceMeta.length > 0) {
    await db.animalGameMeta.bulkAdd(sourceMeta.map(meta => ({
      gameId: newGameId,
      animalId: meta.animalId,
      tags: meta.tags,
      notes: meta.notes,
    })) as AnimalGameMeta[])
  }

  await db.settings.put({ key: 'activeGameId', value: newGameId })
  return newGameId
}

export async function renameGame(gameId: number, newName: string): Promise<void> {
  await db.games.update(gameId, { name: newName })
}

export async function exportGame(gameId: number): Promise<ExportedGameData> {
  const game = await db.games.get(gameId)
  const animals = await db.animals.orderBy('order').toArray()
  const bets = await db.bets.where('gameId').equals(gameId).toArray()
  const meta = await db.animalGameMeta.where('gameId').equals(gameId).toArray()

  const animalById: Record<number, Animal> = {}
  animals.forEach(a => { animalById[a.id] = a })

  return {
    seedId: `${gameId}-${game!.createdAt}`,
    name: game!.name,
    exportedAt: new Date().toISOString(),
    bets: bets
      .map(b => ({ animalOrder: animalById[b.animalId]?.order, amount: b.amount }))
      .filter((b): b is { animalOrder: number; amount: number } => b.animalOrder != null),
    meta: meta
      .map(m => ({ animalOrder: animalById[m.animalId]?.order, tags: m.tags, notes: m.notes }))
      .filter((m): m is { animalOrder: number; tags: string; notes: string } => m.animalOrder != null),
  }
}
