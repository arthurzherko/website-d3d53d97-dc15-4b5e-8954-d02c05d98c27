import { SillyCarousel } from "@/components/SillyCarousel"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaSmile, FaMeh, FaSadTear, FaGrinStars, FaAngry } from "react-icons/fa"
import { toast } from "@/components/ui/use-toast"

const emotions = [
  { icon: FaSmile, text: "Радость", color: "text-yellow-500" },
  { icon: FaMeh, text: "Безразличие", color: "text-gray-500" },
  { icon: FaSadTear, text: "Грусть", color: "text-blue-500" },
  { icon: FaGrinStars, text: "Восторг", color: "text-purple-500" },
  { icon: FaAngry, text: "Злость", color: "text-red-500" },
]

export function EmotionalRollercoaster() {
  const [currentMood, setCurrentMood] = useState<number>(0)

  const changeMood = () => {
    const newMood = Math.floor(Math.random() * emotions.length)
    setCurrentMood(newMood)
    const Icon = emotions[newMood].icon
    toast({
      title: "Новое настроение!",
      description: (
        <div className="flex items-center gap-2">
          <Icon className={`text-xl ${emotions[newMood].color}`} />
          <span>Теперь вы чувствуете: {emotions[newMood].text}</span>
        </div>
      ),
    })
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          🎢 Эмоциональные американские горки 🎡
        </h1>
        <p className="text-lg text-muted-foreground">
          Прокатись на карусели эмоций!
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <SillyCarousel />
        
        <div className="mt-8 flex gap-4">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={changeMood}
          >
            {emotions.map((emotion, index) => {
              const Icon = emotion.icon
              return (
                <Icon
                  key={index}
                  className={`transition-all ${
                    currentMood === index
                      ? `${emotion.color} scale-125`
                      : "text-muted-foreground"
                  }`}
                />
              )
            })}
          </Button>
        </div>
      </div>
    </div>
  )
}