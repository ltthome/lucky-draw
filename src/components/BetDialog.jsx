import { useState, useRef, useEffect } from 'react'
import { db } from '../db.js'

export default function BetDialog({ animal, bets, activeGameId, onClose }) {
  const [amount, setAmount] = useState('')
  const [cellNotes, setCellNotes] = useState(animal.notes || '')
  const [cellTags, setCellTags] = useState(animal.tags || '')
  const [editingBetId, setEditingBetId] = useState(null)
  const [editingAmount, setEditingAmount] = useState('')
  const amountRef = useRef(null)

  useEffect(() => {
    amountRef.current?.focus()
  }, [])

  const handleAdd = async () => {
    const num = parseInt(amount, 10)
    if (!num || num <= 0) return
    await db.bets.add({
      animalId: animal.id,
      amount: num,
      gameId: activeGameId,
    })
    setAmount('')
    amountRef.current?.focus()
  }

  const handleDelete = async (betId) => {
    await db.bets.delete(betId)
  }

  const handleStartEdit = (bet) => {
    setEditingBetId(bet.id)
    setEditingAmount(String(bet.amount))
  }

  const handleSaveEdit = async () => {
    const num = parseInt(editingAmount, 10)
    if (!num || num <= 0) {
      setEditingBetId(null)
      return
    }
    await db.bets.update(editingBetId, { amount: num })
    setEditingBetId(null)
  }

  const handleTagsChange = async (value) => {
    setCellTags(value)
    await db.animals.update(animal.id, { tags: value })
  }

  const handleNotesChange = async (value) => {
    setCellNotes(value)
    await db.animals.update(animal.id, { notes: value })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  const total = bets.reduce((sum, b) => sum + b.amount, 0)
  const tags = cellTags
    ? cellTags.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>
            <span className="dialog-other-name">{animal.otherName}</span>
            {animal.name}
          </h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>

        {bets.length > 0 && (
          <div className="dialog-bets">
            <div className="dialog-total">Tổng: {total}</div>
            <ul className="bet-list">
              {bets.map((bet) => (
                <li key={bet.id} className="bet-item">
                  {editingBetId === bet.id ? (
                    <div className="bet-edit">
                      <input
                        type="number"
                        inputMode="numeric"
                        className="input bet-edit-input"
                        value={editingAmount}
                        onChange={(e) => setEditingAmount(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                        autoFocus
                      />
                      <button className="btn btn-sm btn-primary" onClick={handleSaveEdit}>
                        Lưu
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="bet-amount" onClick={() => handleStartEdit(bet)}>
                        {bet.amount}
                      </span>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(bet.id)}
                      >
                        Xoá
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="dialog-meta">
          <div className="dialog-tags-section">
            <input
              type="text"
              className="input dialog-tags-input"
              placeholder="Tags, phân cách bởi dấu phẩy (vd: 1S, 2C)"
              value={cellTags}
              onChange={(e) => handleTagsChange(e.target.value)}
            />
            {tags.length > 0 && (
              <div className="dialog-tags-preview">
                {tags.map((tag, i) => (
                  <span key={i} className="tag tag-lg">{tag}</span>
                ))}
              </div>
            )}
          </div>
          <textarea
            className="input dialog-notes-input"
            placeholder="Ghi chú..."
            value={cellNotes}
            onChange={(e) => handleNotesChange(e.target.value)}
            rows={2}
          />
        </div>

        <div className="dialog-form">
          <input
            ref={amountRef}
            type="number"
            inputMode="numeric"
            placeholder="Số tiền"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input"
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Thêm
          </button>
        </div>
      </div>
    </div>
  )
}
