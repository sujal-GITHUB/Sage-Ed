import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem } from '../store/navigationSlice'
import { navigationItems } from '../config/navigation'

const NavItem = ({ icon: Icon, children, active, onClick }) => (
  <li className={`
    flex items-center gap-2 px-4 py-2 font-mono text-sm cursor-pointer
    ${active ? 'bg-black text-white rounded-lg' : 'rounded-lg hover:bg-black/5'}
  `} onClick={onClick}>
    <Icon size={18} />
    <span>{children}</span>
  </li>
)

const MobileMenu = ({ isOpen }) => {
  const dispatch = useDispatch()
  const activeItem = useSelector(state => state.navigation.activeItem)

  return isOpen ? (
    <div className="md:hidden fixed inset-y-0 left-0 transform translate-x-0 w-full transition-transform duration-300 ease-in-out z-40">
      <div className="fixed inset-0 bg-black/50" onClick={() => dispatch(setActiveItem(null))} />
      <div className="fixed top-0 left-0 h-[97%] w-56 m-3 border-2 rounded-lg border-black bg-[#9DB2BF] p-4">
        <div className="flex items-center gap-2 mb-8 font-mono font-bold text-xl">
          <span className="p-1 px-3 rounded-lg">Hyphen-Code</span>
        </div>
        <nav>
          <ul className="space-y-2">
            {navigationItems.map(item => (
              <NavItem
                key={item.id}
                icon={item.icon}
                active={activeItem === item.id}
                onClick={() => dispatch(setActiveItem(item.id))}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  ) : null
}

export default MobileMenu