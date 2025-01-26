import React from 'react';

function MainContent() {
    return (
        <div className="mt-4 w-full">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row w-full">
                {/* Left Section */}
                <div className="flex-1 py-10">
                    <div className="text-4xl md:text-6xl font-bold">
                        <span>
                            Collaborate <br /> across the world
                        </span>
                    </div>

                    <div className="py-6 pr-0 md:pr-10 text-xl md:text-2xl font-medium">
                        <span>
                            A selective platform to connect great talents around the globe, build your network now.
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-10">
                        <button className="bg-white border-2 border-black text-black px-6 py-2 rounded-lg font-bold shadow-[4px_4px_0px_0px_black] cursor-pointer hover:bg-[#d7e103] transition-colors duration-300">
                            Get started today
                        </button>

                        <button className="bg-[#d7e933] border-2 border-black text-black px-6 py-2 rounded-lg font-bold shadow-[4px_4px_0px_0px_black] cursor-pointer hover:bg-[#d7e103] transition-colors duration-300">
                            Our plans
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 bg-white flex items-center justify-center py-10 md:py-0">
                    <div className="text-center text-xl font-medium">
                        <span>Right Section Content</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 mt-8">
                {/* Community Insights */}
                <div className="flex-1 bg-[#FED6C1] border-2 border-black text-black p-6 rounded-lg shadow-[4px_6px_0px_0px_black]">
                    <div className="text-xl font-bold">
                        <span>
                            Community insights
                        </span>
                    </div>
                    <div className="py-4">
                        <span>
                            All communications done through our platform are highly encrypted and fully secure. We care about your privacy!
                        </span>
                    </div>
                    <div className="font-bold text-md underline cursor-pointer">
                        <span>
                            Check the community
                        </span>
                    </div>
                </div>

                {/* Free Live Support */}
                <div className="flex-1 bg-[#f1ea37] border-2 border-black text-black p-6 rounded-lg shadow-[4px_6px_0px_0px_black]">
                    <div className="text-xl font-bold">
                        <span>
                            Free live support
                        </span>
                    </div>
                    <div className="py-4">
                        <span>
                            We're always here whenever you need us. Our free live support will answer all questions immediately.
                        </span>
                    </div>
                    <div className="font-bold text-md underline cursor-pointer">
                        <span>
                            Compare plans
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
