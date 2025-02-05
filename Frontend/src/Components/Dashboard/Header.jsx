import { Monitor, Grid, Clock, Cloud, LayoutGrid, Menu } from "lucide-react";
import { HeaderIcon } from "./HeaderIcon";
import { UserProfile } from "./UserProfile";
import { useState } from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [activeItem, setActiveItem] = useState("learning"); // Default active item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state for menu visibility

  const navItems = [
    { id: "learning", icon: Monitor, label: "Learning Plan" },
    { id: "dashboard", icon: Grid, label: "Dashboard" },
    { id: "schedule", icon: Clock, label: "Schedule" },
    { id: "cloud", icon: Cloud, label: "Cloud" },
    { id: "apps", icon: LayoutGrid, label: "Apps" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={logo} alt="Logo" className="w-24" />

        <div className="flex items-center md:hidden"> {/* Burger icon for small screens */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`flex-1 flex items-center justify-center space-x-8 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {navItems.map(({ id, icon: Icon, label }) => (
            <HeaderIcon
              key={id}
              onClick={() => {
                setActiveItem(id);
                setIsMenuOpen(false); // Close menu on item click
              }}
              className={`cursor-pointer transition-all duration-200 ${
                activeItem === id
                  ? "bg-white text-black px-4 py-2 rounded-lg"
                  : "text-white" // Ensure inactive items are white
              }`}
            >
              <Icon className="w-5 h-5" />
              {activeItem === id && ( // Show label only if the icon is active
                <span className="text-sm ml-2">{label}</span>
              )}
            </HeaderIcon>
          ))}
        </div>

        <UserProfile />
      </nav>
    </header>
  );
};
