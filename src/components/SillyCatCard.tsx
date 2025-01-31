import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { FaCat, FaHeart } from 'react-icons/fa'

export interface SillyCatCardProps {
  name: string
  hobby: string
  onPet?: () => void
}

export function SillyCatCard({ name, hobby, onPet }: SillyCatCardProps) {
  const [pats, setPats] = useState(0)
  const [isHappy, setIsHappy] = useState(false)

  const handlePet = () => {
    setPats((prev) => prev + 1)
    setIsHappy(true)
    setTimeout(() => setIsHappy(false), 500)
    onPet?.()
  }

  return (
    <Card className={`transform transition-all duration-300 ${isHappy ? 'scale-105' : ''}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaCat className={`text-2xl ${isHappy ? 'text-pink-500' : 'text-gray-600'}`} />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          Любимое занятие: <span className="font-bold">{hobby}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Количество поглаживаний: {pats}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handlePet}
          variant="outline"
          className="group w-full transform transition-all hover:bg-pink-100 dark:hover:bg-pink-900"
        >
          Погладить котика
          <FaHeart className="text-pink-500 transition-all group-hover:scale-125" />
        </Button>
      </CardFooter>
    </Card>
  )
}