import { useState, useMemo } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './db.js'
import Header from './components/Header.jsx'
import GameBoard from './components/GameBoard.jsx'
import BetDialog from './components/BetDialog.jsx'
import GameManagerDialog from './components/GameManagerDialog.jsx'

export default function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [columns, setColumns] = useState(3)
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

  const betsByAnimal = useMemo(() => {
    if (!bets) return {}
    return bets.reduce((acc, bet) => {
      if (!acc[bet.animalId]) acc[bet.animalId] = []
      acc[bet.animalId].push(bet)
      return acc
    }, {})
  }, [bets])

  if (!animals || !bets || !games) return null

  const activeGame = games.find(g => g.id === activeGameId)

  return (
    <div className="app">
      <GameBoard
        animals={animals}
        betsByAnimal={betsByAnimal}
        onSquareClick={setSelectedAnimal}
        columns={columns}
      />

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
