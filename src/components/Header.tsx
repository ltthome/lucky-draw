import { db, createGame } from '../db'
import type { Game } from '../types'

interface HeaderProps {
  columns: 3 | 6
  setColumns: (cols: 3 | 6) => void
  activeGame: Game | undefined
  onOpenGameManager: () => void
}

export default function Header({ columns, setColumns, activeGame, onOpenGameManager }: HeaderProps) {
  const handleNewRound = async () => {
    if (window.confirm('Tạo ván mới?')) {
      const count = await db.games.count()
      await createGame(`Ván ${count + 1}`)
    }
  }

  const toggleColumns = () => {
    setColumns(columns === 6 ? 3 : 6)
  }

  return (
    <footer className="toolbar">
      <button className="btn btn-toolbar" onClick={toggleColumns}>
        {columns === 6 ? '3 cột' : '6 cột'}
      </button>
      <button className="btn btn-new-round" onClick={handleNewRound}>
        Ván mới
      </button>
      <button className="btn btn-toolbar btn-game-name" onClick={onOpenGameManager}>
        {activeGame?.name || 'Ván'} ▾
      </button>
    </footer>
  )
}
