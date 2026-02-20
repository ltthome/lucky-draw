import { useState, useMemo } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './db.js'
import Header from './components/Header.jsx'
import GameBoard from './components/GameBoard.jsx'
import BoardSummary from './components/BoardSummary.jsx'
import BetDialog from './components/BetDialog.jsx'
import GameManagerDialog from './components/GameManagerDialog.jsx'

export default function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [columns, setColumns] = useState(6)
  const [showGameManager, setShowGameManager] = useState(false)

  const animals = useLiveQuery(() => db.animals.orderBy('order').toArray(), [])
  const activeGameSetting = useLiveQuery(() => db.settings.get('activeGameId'), [])
  const activeGameId = activeGameSetting?.value
  const games = useLiveQuery(() => db.games.toArray(), [])
  const bets = useLiveQuery(
    () => activeGameId
      ? db.bets.where('gameId').equals(activeGameId).toArray()
      : [],
    [activeGameId]
  )
  const gameMeta = useLiveQuery(
    () => activeGameId
      ? db.animalGameMeta.where('gameId').equals(activeGameId).toArray()
      : [],
    [activeGameId]
  )

  const betsByAnimal = useMemo(() => {
    if (!bets) return {}
    return bets.reduce((acc, bet) => {
      if (!acc[bet.animalId]) acc[bet.animalId] = []
      acc[bet.animalId].push(bet)
      return acc
    }, {})
  }, [bets])

  const metaByAnimal = useMemo(() => {
    if (!gameMeta) return {}
    return gameMeta.reduce((acc, meta) => {
      acc[meta.animalId] = meta
      return acc
    }, {})
  }, [gameMeta])

  // Merge animals with their per-game metadata
  const animalsWithMeta = useMemo(() => {
    if (!animals) return []
    return animals.map(animal => ({
      ...animal,
      tags: metaByAnimal[animal.id]?.tags || '',
      notes: metaByAnimal[animal.id]?.notes || '',
    }))
  }, [animals, metaByAnimal])

  if (!animals || !bets || !games || !gameMeta) return null

  const activeGame = games.find(g => g.id === activeGameId)

  return (
    <div className="app">
      <GameBoard
        animals={animalsWithMeta}
        betsByAnimal={betsByAnimal}
        onSquareClick={setSelectedAnimal}
        columns={columns}
      />

      <BoardSummary animals={animalsWithMeta} betsByAnimal={betsByAnimal} />

      <Header
        columns={columns}
        setColumns={setColumns}
        activeGame={activeGame}
        onOpenGameManager={() => setShowGameManager(true)}
      />

      {selectedAnimal && (
        <BetDialog
          animal={selectedAnimal}
          bets={betsByAnimal[selectedAnimal.id] || []}
          activeGameId={activeGameId}
          onClose={() => setSelectedAnimal(null)}
        />
      )}

      {showGameManager && (
        <GameManagerDialog
          games={games}
          activeGameId={activeGameId}
          onClose={() => setShowGameManager(false)}
        />
      )}
    </div>
  )
}
