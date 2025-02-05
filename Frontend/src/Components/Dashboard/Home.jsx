import React from "react";
import Roadmap from './Roadmap'
import {SearchBar}from './SearchBar'
import ProgressBar  from "./ProgressBar";
import Events from "./Events";

const Home = () => {
  return (
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
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
