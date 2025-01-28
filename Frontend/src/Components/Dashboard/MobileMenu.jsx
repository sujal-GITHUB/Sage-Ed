import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem, toggleMobileMenu } from '../../store/navigationSlice'
import { navigationItems } from '../../config/navigation'
import { X } from 'lucide-react'

const NavItem = ({ icon: Icon, children, active, onClick }) => (
  <li className={`
    flex items-center gap-2 px-4 py-2 font-mono text-sm cursor-pointer
    ${active ? 'bg-black text-white rounded-lg' : 'rounded-lg hover:bg-black/5'}
  `} onClick={onClick}>
    <Icon size={18} />
    <span>{children}</span>
  </li>
)

const MobileMenu = () => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen, activeItem } = useSelector(state => state.navigation)

  return isMobileMenuOpen ? (
    <div className="md:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => dispatch(toggleMobileMenu())} />
      
      <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-xl border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-3xl">Hyphen-Code</span>
          <button onClick={() => dispatch(toggleMobileMenu())}>
            <X size={24} />
          </button>
        </div>

        <nav>
          <ul className="space-y-2">
            {navigationItems.map(item => (
              <li 
                key={item.id}
                onClick={() => {
                  dispatch(setActiveItem(item.id))
                  dispatch(toggleMobileMenu())
                }}
                className={`
                  flex items-center gap-3 p-3 rounded-xl border-2 border-black cursor-pointer
                  transition-all duration-300
                  ${activeItem === item.id 
                    ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }
                `}
              >
                <item.icon size={20} />
                <span className="font-bold">{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  ) : null
}

export default MobileMenu