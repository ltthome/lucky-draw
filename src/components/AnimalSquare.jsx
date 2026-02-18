export default function AnimalSquare({ animal, bets, onClick }) {
  const total = bets.reduce((sum, b) => sum + b.amount, 0)
  const hasBets = bets.length > 0
  const betAmounts = bets.map((b) => b.amount).join(' ')
  const tags = animal.tags
    ? animal.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : []

  return (
    <div
      className={`square ${hasBets ? 'square-has-bets' : ''}`}
      onClick={onClick}
    >
      <div className="square-header">
        <span className="square-other-name">{animal.otherName}</span>
        <span className="square-name">{animal.name}</span>
      </div>
      {hasBets && (
        <div className="square-info">
          <span className="square-bets">{betAmounts}</span>
          <span className="square-total">{total}</span>
        </div>
      )}
      {tags.length > 0 && (
        <div className="square-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}
      {animal.notes && (
        <div className="square-notes">{animal.notes}</div>
      )}
    </div>
  )
}
