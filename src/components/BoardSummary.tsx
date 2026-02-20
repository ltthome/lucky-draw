import type { AnimalWithMeta, BetsByAnimal } from '../types'

interface BoardSummaryProps {
  animals: AnimalWithMeta[]
  betsByAnimal: BetsByAnimal
}

interface AnimalTotal {
  id: number
  name: string
  total: number
}

export default function BoardSummary({ animals, betsByAnimal }: BoardSummaryProps) {
  const animalTotals: AnimalTotal[] = animals.map(animal => ({
    id: animal.id,
    name: animal.name,
    total: (betsByAnimal[animal.id] || []).reduce((s, b) => s + b.amount, 0),
  }))

  const grandTotal = animalTotals.reduce((s, a) => s + a.total, 0)
  const activeCount = animalTotals.filter(a => a.total > 0).length

  const topAll = [...animalTotals]
    .filter(a => a.total > 0)
    .sort((a, b) => b.total - a.total)

  const colSums = Array<number>(6).fill(0)
  animalTotals.forEach((a, i) => {
    colSums[i % 6] += a.total
  })

  const fmt = (n: number): string => n.toLocaleString('vi-VN')

  return (
    <div className="summary">
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
