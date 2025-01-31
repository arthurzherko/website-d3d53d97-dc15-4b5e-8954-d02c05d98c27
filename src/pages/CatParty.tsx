import { SillyCatCard } from "@/components/SillyCatCard"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaCat } from "react-icons/fa"
import { toast } from "@/components/ui/use-toast"

const catNames = [
  "Пушистик",
  "Барсик",
  "Мурзик",
  "Василий",
  "Снежок",
  "Рыжик",
  "Персик",
  "Соня",
]

const catHobbies = [
  "спать на клавиатуре",
  "гонять мышей",
  "смотреть в окно",
  "играть с клубком",
  "есть вискас",
  "мурчать",
  "царапать диван",
  "лежать на солнышке",
]

export function CatParty() {
  const [totalPets, setTotalPets] = useState(0)

  const handlePet = () => {
    setTotalPets((prev) => prev + 1)
    if (totalPets && totalPets % 10 === 0) {
      toast({
        title: "Достижение разблокировано!",
        description: `Вы погладили котиков ${totalPets + 1} раз! 🏆`,
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          🐱 Котопати в самом разгаре! 🎉
        </h1>
        <p className="text-lg text-muted-foreground">
          Всего поглаживаний: {totalPets}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {catNames.map((name, index) => (
          <SillyCatCard
            key={name}
            name={name}
            hobby={catHobbies[index]}
            onPet={handlePet}
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="lg"
        className="group"
        onClick={() => {
          toast({
            title: "Мяу!",
            description: "Все котики довольны и мурчат! 😺",
          })
        }}
      >
        <FaCat className="mr-2 text-xl group-hover:animate-bounce" />
        Погладить всех котиков
      </Button>
    </div>
  )
}