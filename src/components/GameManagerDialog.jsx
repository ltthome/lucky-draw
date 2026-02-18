import { useState } from 'react'
import { switchGame, deleteGame, copyGame, renameGame } from '../db.js'

export default function GameManagerDialog({ games, activeGameId, onClose }) {
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  const sortedGames = [...games].sort((a, b) => b.createdAt - a.createdAt)

  const handleSwitch = async (gameId) => {
    await switchGame(gameId)
    onClose()
  }

  const handleDelete = async (game) => {
    if (games.length <= 1) {
      alert('Không thể xoá ván cuối cùng.')
      return
    }
    if (window.confirm(`Xoá "${game.name}"? Tất cả cược trong ván này sẽ bị xoá.`)) {
      await deleteGame(game.id)
    }
  }

  const handleCopy = async (game) => {
    await copyGame(game.id, `${game.name} (bản sao)`)
  }

  const handleStartRename = (game) => {
    setEditingId(game.id)
    setEditName(game.name)
  }

  const handleSaveRename = async () => {
    if (editName.trim()) {
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
