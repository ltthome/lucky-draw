export default function BoardSummary({ animals, betsByAnimal }) {
  // Pre-compute per-animal totals once
  const animalTotals = animals.map(animal => ({
    id: animal.id,
    name: animal.name,
    total: (betsByAnimal[animal.id] || []).reduce((s, b) => s + b.amount, 0),
  }))

  const grandTotal = animalTotals.reduce((s, a) => s + a.total, 0)
  const activeCount = animalTotals.filter(a => a.total > 0).length

  // All animals with bets, sorted descending by total
  const topAll = [...animalTotals]
    .filter(a => a.total > 0)
    .sort((a, b) => b.total - a.total)

  // Column sums — always based on 6-column physical layout (animals ordered 1-36)
  // col 0: indices 0,6,12,18,24,30  col 1: indices 1,7,13,19,25,31  etc.
  const colSums = Array(6).fill(0)
  animalTotals.forEach((a, i) => {
    colSums[i % 6] += a.total
  })

  const fmt = (n) => n.toLocaleString('vi-VN')

  return (
    <div className="summary">
      {/* Stat chips */}
      <div className="summary-stats">
        <div className="summary-stat-card summary-stat-total">
          <span className="summary-stat-num">{fmt(grandTotal)}</span>
          <span className="summary-stat-lbl">Tổng tịch</span>
        </div>
        <div className="summary-stat-card summary-stat-count">
          <span className="summary-stat-num">
            {activeCount}<span className="summary-stat-denom">/36</span>
          </span>
          <span className="summary-stat-lbl">Số con</span>
        </div>
      </div>

      {/* Column sums */}
      <div className="summary-cols-wrap">
        <span className="summary-section-lbl">Tổng cột</span>
        <div className="summary-cols">
          {colSums.map((s, i) => (
            <div key={i} className={`summary-col ${s > 0 ? 'summary-col-active' : ''}`}>
              <span className="summary-col-idx">{i + 1}</span>
              <span className="summary-col-val">{fmt(s)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All animals with bets, sorted descending */}
      {topAll.length > 0 && (
        <div className="summary-top">
          <span className="summary-section-lbl">Đánh nhiều</span>
          <div className="summary-top-chips">
            {topAll.map((a) => (
              <span key={a.id} className="summary-top-chip">
                <span className="summary-chip-name">{a.name}</span>
                <span className="summary-chip-val">{fmt(a.total)}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
