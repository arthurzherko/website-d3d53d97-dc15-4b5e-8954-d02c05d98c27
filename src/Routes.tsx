import { Routes as RouterRoutes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CatParty } from "./pages/CatParty"
import { EmotionalRollercoaster } from "./pages/EmotionalRollercoaster"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link, Outlet } from "react-router-dom"

const Navigation = () => (
  <NavigationMenu className="mb-8">
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link to="/" className={navigationMenuTriggerStyle()}>
          Главная
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/cats" className={navigationMenuTriggerStyle()}>
          Котопати
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/emotions" className={navigationMenuTriggerStyle()}>
          Эмоциональные горки
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

const Layout = () => (
  <div className="container mx-auto p-4">
    <Navigation />
    <Outlet />
  </div>
)

const Routes = () => (
  <RouterRoutes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/cats" element={<CatParty />} />
      <Route path="/emotions" element={<EmotionalRollercoaster />} />
    </Route>
  </RouterRoutes>
)

export default Routes