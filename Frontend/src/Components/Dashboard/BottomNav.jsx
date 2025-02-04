import { Plus } from "lucide-react"
import { Card } from "./Card"
import { NavButton } from "./NavButton"

export const BottomNav = () => (
  <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
    <Card className="p-2 flex items-center gap-2">
      {['T', 'A', 'P', 'R', 'D', 'O'].map((letter) => (
        <NavButton key={letter} active={letter === 'P'}>
          <span className="font-mono">{letter}</span>
        </NavButton>
      ))}
      <NavButton>
        <Plus className="w-4 h-4" />
      </NavButton>
    </Card>
  </div>
)
