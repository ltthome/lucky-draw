import { useState } from 'react'
import { switchGame, deleteGame, copyGame, copyGameAsSum, renameGame, exportGame } from '../db'
import type { Game } from '../types'

interface GameManagerDialogProps {
  games: Game[]
  activeGameId: number
  onClose: () => void
}

export default function GameManagerDialog({ games, activeGameId, onClose }: GameManagerDialogProps) {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')

  const sortedGames = [...games].sort((a, b) => b.createdAt - a.createdAt)

  const handleSwitch = async (gameId: number) => {
    await switchGame(gameId)
    onClose()
  }

  const handleDelete = async (game: Game) => {
    if (games.length <= 1) {
      alert('Không thể xoá ván cuối cùng.')
      return
    }
    if (window.confirm(`Xoá "${game.name}"? Tất cả cược trong ván này sẽ bị xoá.`)) {
      await deleteGame(game.id)
    }
  }

  const handleCopy = async (game: Game) => {
    await copyGame(game.id, `${game.name} (bản sao)`)
  }

  const handleCopySum = async (game: Game) => {
    await copyGameAsSum(game.id, `${game.name} (tổng)`)
  }

  const handleStartRename = (game: Game) => {
    setEditingId(game.id)
    setEditName(game.name)
  }

  const handleExport = async (game: Game) => {
    const data = await exportGame(game.id)
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${game.name}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleSaveRename = async () => {
    if (editName.trim() && editingId !== null) {
      await renameGame(editingId, editName.trim())
    }
    setEditingId(null)
  }

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>Quản lý ván</h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>
        <div className="game-list">
          {sortedGames.map(game => (
            <div
              key={game.id}
              className={`game-row ${game.id === activeGameId ? 'game-row-active' : ''}`}
            >
              {editingId === game.id ? (
                <div className="game-rename">
                  <input
                    className="input"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSaveRename()}
                    autoFocus
                  />
                  <button className="btn btn-sm btn-primary" onClick={handleSaveRename}>
                    Lưu
                  </button>
                </div>
              ) : (
                <>
                  <div className="game-info" onClick={() => handleSwitch(game.id)}>
                    {game.id === activeGameId && <span className="game-active-dot" />}
                    <span className="game-name">{game.name}</span>
                  </div>
                  <div className="game-actions">
                    <button className="btn btn-sm btn-toolbar-alt" onClick={() => handleStartRename(game)}>
                      Đổi tên
                    </button>
                    <button className="btn btn-sm btn-toolbar-alt" onClick={() => handleCopy(game)}>
                      Chép
                    </button>
                    <button className="btn btn-sm btn-toolbar-alt" onClick={() => handleCopySum(game)}>
                      Chép ∑
                    </button>
                    <button className="btn btn-sm btn-toolbar-alt" onClick={() => handleExport(game)}>
                      Xuất
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(game)}>
                      Xoá
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
