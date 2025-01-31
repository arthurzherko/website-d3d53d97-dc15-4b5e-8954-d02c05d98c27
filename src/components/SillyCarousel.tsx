import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { FaSmile, FaMeh, FaSadTear, FaGrinStars, FaAngry } from 'react-icons/fa'

const emotions = [
  { icon: FaSmile, text: 'Радость', color: 'text-yellow-500' },
  { icon: FaMeh, text: 'Безразличие', color: 'text-gray-500' },
  { icon: FaSadTear, text: 'Грусть', color: 'text-blue-500' },
  { icon: FaGrinStars, text: 'Восторг', color: 'text-purple-500' },
  { icon: FaAngry, text: 'Злость', color: 'text-red-500' },
]

export function SillyCarousel() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {emotions.map((emotion, index) => {
          const Icon = emotion.icon
          return (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center gap-4 p-6">
                <Icon className={`text-6xl ${emotion.color} transition-all hover:scale-110`} />
                <p className="text-xl font-semibold">{emotion.text}</p>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}