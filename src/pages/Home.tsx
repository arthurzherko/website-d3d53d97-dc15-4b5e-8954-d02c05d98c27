import { Button } from "@/components/ui/button"
import { SillyCounter } from "@/components/SillyCounter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaLaugh, FaCat, FaSmileBeam } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          🎪 Добро пожаловать на самый нелепый сайт! 🎪
        </h1>
        <p className="text-lg text-muted-foreground">
          Здесь нет ничего полезного, зато очень весело!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaLaugh className="text-2xl text-primary" />
              Счётчик бесполезности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SillyCounter />
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer transform transition-all hover:scale-105"
          onClick={() => navigate("/cats")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaCat className="text-2xl text-secondary" />
              Котопати
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Нажми, чтобы попасть на вечеринку котиков! 🎉
            </p>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer transform transition-all hover:scale-105"
          onClick={() => navigate("/emotions")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaSmileBeam className="text-2xl text-accent" />
              Эмоциональные горки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Американские горки эмоций ждут тебя! 🎢
            </p>
          </CardContent>
        </Card>
      </div>

      <Button
        variant="outline"
        size="lg"
        className="group animate-bounce"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="group-hover:animate-spin">🎈</span>
        Бесполезная кнопка
        <span className="group-hover:animate-spin">🎈</span>
      </Button>
    </div>
  )
}