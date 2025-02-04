import { Monitor, Grid, Clock, Cloud, LayoutGrid, Menu, X } from "lucide-react"
import { HeaderIcon } from "./HeaderIcon"
import { UserProfile } from "./UserProfile"
import { useState } from "react"

export const Header = () => {
  const [activeItem, setActiveItem] = useState('learning') // Default active item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'learning', icon: Monitor, label: 'Learning Plan' },
    { id: 'dashboard', icon: Grid, label: 'Dashboard' },
    { id: 'schedule', icon: Clock, label: 'Schedule' },
    { id: 'cloud', icon: Cloud, label: 'Cloud' },
    { id: 'apps', icon: LayoutGrid, label: 'Apps' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#ADFF00] text-white px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold">Dei</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navItems.map(({ id, icon: Icon, label }) => (
            <HeaderIcon 
              key={id}
              onClick={() => setActiveItem(id)}
              className={`cursor-pointer transition-all duration-200 ${
                activeItem === id ? 'bg-white text-black px-4 py-2 rounded-lg' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              {activeItem === id && (
                <span className="text-sm ml-2">{label}</span>
              )}
            </HeaderIcon>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-black p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="p-4 space-y-4">
              {navItems.map(({ id, icon: Icon, label }) => (
                <HeaderIcon 
                  key={id}
                  onClick={() => {
                    setActiveItem(id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`cursor-pointer w-full transition-all duration-200 ${
                    activeItem === id ? 'text-[#ADFF00]' : 'text-black'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm ml-2">{label}</span>
                </HeaderIcon>
              ))}
            </div>
          </div>
        )}
        
        <UserProfile />
      </nav>
    </header>
  )
}