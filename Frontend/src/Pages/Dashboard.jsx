import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, setActiveItem } from '../store/navigationSlice'
import Sidebar from "../components/Dashboard/Sidebar"
import Navbar from "../Components/Dashboard/Navbar"
import MobileMenu from '../components/Dashboard/MobileMenu'
import Home from '../Components/Dashboard/Home'
import AiAssistant from '../Components/Dashboard/AiAssistant'
import Tasks from '../Components/Dashboard/Tasks'
import VideoSummarizer from '../Components/Dashboard/VideoSummarizer'
import NotionHelp from '../Components/Dashboard/NotionHelp'
import Tools from '../Components/Dashboard/Tools'
import CareerPath from '../Components/Dashboard/CareerPath'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen, activeItem } = useSelector(state => state.navigation)

  const renderContent = () => {
    switch(activeItem) {
      case 'home':
        return <Home />
      case 'ai-assistant':
        return <AiAssistant />
      case 'tasks':
        return <Tasks />
      case 'youtube-help':
        return <VideoSummarizer />
      case 'notion-help':
        return <NotionHelp />
      case 'tools':
        return <Tools />
      case 'career-path':
        return <CareerPath />
      case 'logout':
        // Handle logout logic here
        window.location.href = '/login'
        return null
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-[#fffdef]">
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 border-2 border-black rounded-lg bg-white"
        onClick={() => dispatch(toggleMobileMenu())}
      >
        <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
      </button>

      <MobileMenu />
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Navbar />

      <main className="ml-0 md:ml-56 px-4 md:pt-0 pt-20 md:px-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard
