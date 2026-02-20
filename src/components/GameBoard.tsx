import type { AnimalWithMeta, BetsByAnimal } from '../types'
import AnimalSquare from './AnimalSquare'

interface GameBoardProps {
  animals: AnimalWithMeta[]
  betsByAnimal: BetsByAnimal
  onSquareClick: (animal: AnimalWithMeta) => void
  columns: 3 | 6
}

export default function GameBoard({ animals, betsByAnimal, onSquareClick, columns }: GameBoardProps) {
  return (
    <div className={`board board-${columns}`}>
      {animals.map((animal) => (
        <AnimalSquare
          key={animal.id}
          animal={animal}
          bets={betsByAnimal[animal.id] || []}
          onClick={() => onSquareClick(animal)}
        />
      ))}
    </div>
  )
}
