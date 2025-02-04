import { BottomNav } from "../Components/Dashboard/BottomNav"
import { Header } from "../Components/Dashboard/Header"
import { SearchBar } from "../Components/Dashboard/SearchBar"
import { LearningItem } from "../Components/Dashboard/LearningItem"
import { EventCard } from "../Components/Dashboard/EventCard"
import { learningItems, events } from "../data/mockData"

 const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ff]">
      <Header />
      <main className="p-6">
        <div className="grid grid-cols-[1fr_300px] gap-6">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                My Learning Plan <span role="img" aria-label="book">📚</span>
              </h1>
              <SearchBar />
            </div>
            <div className="space-y-6">
              {learningItems.map((item, index) => (
                <LearningItem key={index} {...item} />
              ))}
            </div>
          </div>
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
      </main>
      <BottomNav />
    </div>
  )
}

export default Dashboard