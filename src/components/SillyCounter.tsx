import { useState } from 'react'
import { Button } from './ui/button'
import { FaPlus, FaMinus, FaRandom, FaUndoAlt } from 'react-icons/fa'

export function SillyCounter() {
  const [count, setCount] = useState(0)
  const [rotation, setRotation] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
    setRotation((prev) => prev + 360)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
    setRotation((prev) => prev - 360)
  }

  const randomize = () => {
    setCount(Math.floor(Math.random() * 100))
    setRotation(Math.random() * 720 - 360)
  }

  const reset = () => {
    setCount(0)
    setRotation(0)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground transition-transform duration-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {count}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={decrement}>
          <FaMinus />
        </Button>
        <Button variant="outline" onClick={increment}>
          <FaPlus />
        </Button>
        <Button variant="secondary" onClick={randomize}>
          <FaRandom />
        </Button>
        <Button variant="destructive" onClick={reset}>
          <FaUndoAlt />
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {count === 0
          ? 'Ноль это скучно!'
          : count > 0
          ? 'Больше! Больше!'
          : 'Отрицательно настроен...'}
      </p>
    </div>
  )
}