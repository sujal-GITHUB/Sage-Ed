import { BottomNav } from "../Components/Dashboard/BottomNav";
import { Header } from "../Components/Dashboard/Header";
import { SearchBar } from "../Components/Dashboard/SearchBar";
import { LearningItem } from "../Components/Dashboard/LearningItem";
import Roadmap from '../Components/Dashboard/Roadmap'
import { EventCard } from "../Components/Dashboard/EventCard";
import { learningItems, events } from "../data/mockData";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ADFF00]">
      <nav className="fixed w-full top-0 z-50">
        <Header />
      </nav>

      <div className="fixed inset-x-0 top-18 md:top-17 mx-2 bottom-0 bg-[#FFFCF1] rounded-t-3xl overflow-hidden overflow-y-auto scrollbar-hide">
        <div className="h-full p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-end mb-8">
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
              <Roadmap/>

              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                  My Events{" "}
                  <span role="img" aria-label="smile">
                    😊
                  </span>
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

      <BottomNav />
    </div>
  );
};

export default Dashboard;
