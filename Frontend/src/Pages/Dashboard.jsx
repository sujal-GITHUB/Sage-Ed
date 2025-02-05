import { BottomNav } from "../Components/Dashboard/BottomNav"
import { Header } from "../Components/Dashboard/Header"
import { SearchBar } from "../Components/Dashboard/SearchBar"
import Roadmap from '../Components/Dashboard/Roadmap'
import { EventCard } from "../Components/Dashboard/EventCard"
import { learningItems, events } from "../data/mockData"

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-black min-h-screen">
        <div className="fixed inset-x-0 mx-3 top-17 bottom-0 bg-[#FFFCF1] rounded-t-2xl overflow-hidden">
          <div className="p-4 h-full overflow-auto hide-scrollbar">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
                <Roadmap />

                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                    My Events <span role="img" aria-label="smile">😊</span>
                  </h2>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <EventCard key={index} {...event} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}

export default Dashboard