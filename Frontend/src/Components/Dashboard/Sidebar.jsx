import { useSelector, useDispatch } from 'react-redux'
import { setActiveItem } from '../../store/navigationSlice'
import { navigationItems } from '../../config/navigation'

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
    <div className="fixed top-0 left-0 m-3 h-[96%] w-56 bg-[#d7e933] border-2 rounded-xl border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <div className="font-bold text-2xl mb-10">
        Hyphen-Code
      </div>
      
      <nav>
        <ul className="space-y-2">
          {navigationItems.map(item => (
            <li 
              key={item.id}
              onClick={() => dispatch(setActiveItem(item.id))}
              className={`
                flex items-center gap-3 p-3 rounded-xl border-2 border-black cursor-pointer
                transition-all duration-300
                ${activeItem === item.id 
                  ? 'bg-black text-xs text-[#d7e933] ' 
                  : 'bg-white text-xs hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }
              `}
            >
              <item.icon size={20} />
              <span className="font-semibold">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
