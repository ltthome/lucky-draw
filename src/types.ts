// ============================================================
// Database entity types (stored in IndexedDB via Dexie)
// ============================================================

/** An animal record as stored in the `animals` table. */
export interface Animal {
  id: number
  order: number
  name: string
  otherName: string
  defaultTags: string
  defaultNotes: string
}

/** An animal merged with per-game metadata, used for display. */
export interface AnimalWithMeta extends Animal {
  tags: string
  notes: string
}

/** A single bet entry in the `bets` table. */
export interface Bet {
  id: number
  animalId: number
  amount: number
  gameId: number
}

/** A game record in the `games` table. */
export interface Game {
  id: number
  name: string
  createdAt: number
  seedId?: string
}

/** Per-game metadata for an animal in the `animalGameMeta` table. */
export interface AnimalGameMeta {
  id: number
  gameId: number
  animalId: number
  tags: string
  notes: string
}

/** A key-value setting in the `settings` table. */
export interface Setting {
  key: string
  value: number
}

// ============================================================
// Configuration / seed data types (source code constants)
// ============================================================

/** Shape of each entry in the DEFAULT_ANIMALS source-code array. */
export interface DefaultAnimalConfig {
  order: number
  name: string
  otherName: string
  defaultTags: string
  defaultNotes: string
}

/** A bet entry within an exported/seeded game (uses animalOrder, not animalId). */
export interface SeededBet {
  animalOrder: number
  amount: number
}

/** A meta entry within an exported/seeded game. */
export interface SeededMeta {
  animalOrder: number
  tags: string
  notes: string
}

/** Shape of each entry in the SEEDED_GAMES array. */
export interface SeededGame {
  seedId: string
  name: string
  exportedAt: string
  bets: SeededBet[]
  meta: SeededMeta[]
}

// ============================================================
// Computed / lookup types used in components
// ============================================================

/** Bets grouped by animal ID. */
export type BetsByAnimal = Record<number, Bet[]>

/** The exported JSON shape produced by exportGame(). */
export interface ExportedGameData {
  seedId: string
  name: string
  exportedAt: string
  bets: SeededBet[]
  meta: SeededMeta[]
}
