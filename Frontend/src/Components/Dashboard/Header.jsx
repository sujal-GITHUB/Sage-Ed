import { Monitor, Grid, Clock, Cloud, LayoutGrid } from "lucide-react"
import { HeaderIcon } from "./HeaderIcon"
import { UserProfile } from "./UserProfile"

export const Header = () => (
  <header className="bg-black text-white p-4 rounded-t-xl flex items-center justify-between">
    <div className="text-xl font-bold">Dei</div>
    <div className="flex items-center space-x-6">
      <HeaderIcon>
        <Monitor className="w-4 h-4" />
        <span className="text-sm">Learning Plan</span>
      </HeaderIcon>
      <Grid className="w-4 h-4" />
      <Clock className="w-4 h-4" />
      <Cloud className="w-4 h-4" />
      <LayoutGrid className="w-4 h-4" />
    </div>
    <UserProfile />
  </header>
)