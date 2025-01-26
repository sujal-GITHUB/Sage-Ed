import { useSelector, useDispatch } from 'react-redux'
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

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeItem = useSelector(state => state.navigation.activeItem)

  return (
    <aside className="fixed top-0 left-0 w-56 h-[97%] border-2 m-3 rounded-lg border-black bg-[#9DB2BF] p-4">
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
    </aside>
  )
}

export default Sidebar
