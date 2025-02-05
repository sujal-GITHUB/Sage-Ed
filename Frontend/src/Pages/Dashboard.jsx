import { BottomNav } from "../Components/Dashboard/BottomNav";
import { Header } from "../Components/Dashboard/Header";
import { SearchBar } from "../Components/Dashboard/SearchBar";
import Roadmap from "../Components/Dashboard/Roadmap";
import ProgressBar from "../Components/Dashboard/ProgressBar";
import Events from "../Components/Dashboard/Events";

const Dashboard = () => {
<<<<<<< HEAD
=======
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
      case 'saved-notions':
        return <SavedNotions/>
      case 'logout':
        // Handle logout logic here
        window.location.href = '/login'
        return null
      default:
        return <Home />
    }
  }

 const Dashboard = () => {
>>>>>>> 98907a04fd6b1078111a47d97580f157c50accd4
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900">
      {/* Header (Fixed at the Top) */}
      <nav className="fixed w-full top-0 z-50">
        <Header />
      </nav>

      {/* Main Content Container */}
      <div className="fixed inset-x-0 top-16 md:top-17 mx-2 bottom-0 bg-[#FFFCF1] dark:bg-gray-800 rounded-t-3xl overflow-hidden">
        <div className="h-full p-6 md:p-8 overflow-y-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* Search Bar */}
            <div className="flex justify-end">
              <SearchBar />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
              {/* Roadmap Section */}
              <div>
                <Roadmap />

                {/* Progress Bar */}
                <div className="mt-6">
                  <ProgressBar />
                </div>
              </div>

              {/* Events Section */}
              <Events/>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Fixed at Bottom) */}
      <BottomNav />
    </div>
  );
};

export default Dashboard;
