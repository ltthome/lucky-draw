import { useState } from 'react'
import { db } from '../db.js'

export default function AnimalCMS({ animals }) {
  const [edits, setEdits] = useState(() =>
    animals.reduce((acc, a) => {
      acc[a.id] = { name: a.name, otherName: a.otherName || '' }
      return acc
    }, {})
  )
  const [saved, setSaved] = useState(false)

  const handleChange = (id, field, value) => {
    setEdits((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }))
    setSaved(false)
  }

  const handleSave = async () => {
    const updates = animals.map((a) =>
      db.animals.update(a.id, {
        name: edits[a.id].name,
        otherName: edits[a.id].otherName,
      })
    )
    await Promise.all(updates)
    setSaved(true)
  }

  return (
    <div className="cms">
      <h2 className="cms-title">Cài đặt 36 con</h2>
      <div className="cms-list">
        {animals.map((animal) => (
          <div key={animal.id} className="cms-row">
            <span className="cms-order">{animal.order}</span>
            <input
              className="input cms-input"
              value={edits[animal.id]?.name || ''}
              onChange={(e) => handleChange(animal.id, 'name', e.target.value)}
              placeholder="Tên"
            />
            <input
              className="input cms-input"
              value={edits[animal.id]?.otherName || ''}
              onChange={(e) => handleChange(animal.id, 'otherName', e.target.value)}
              placeholder="Tên khác"
            />
          </div>
        ))}
      </div>
      <div className="cms-actions">
        <button className="btn btn-primary" onClick={handleSave}>
          Lưu
        </button>
        {saved && <span className="cms-saved">Đã lưu!</span>}
      </div>
    </div>
  )
}
