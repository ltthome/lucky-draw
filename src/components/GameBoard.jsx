import AnimalSquare from './AnimalSquare.jsx'

export default function GameBoard({ animals, betsByAnimal, onSquareClick, columns }) {
  return (
    <div className={`board board-${columns}`}>
      {animals.map((animal, index) => (
        <AnimalSquare
          key={animal.id}
          animal={animal}
          bets={betsByAnimal[animal.id] || []}
          onClick={() => onSquareClick(animal)}
          index={index}
        />
      ))}
    </div>
  )
}
