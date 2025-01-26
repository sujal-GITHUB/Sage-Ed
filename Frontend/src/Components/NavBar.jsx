import React from 'react';

function NavBar() {
    return (
        <div className="flex justify-between items-center px-8 py-4">
            <div className="text-xl font-semibold text-gray-800">
                <span className="flex items-center gap-2 font-bold text-2xl">
                    <span className="bg-[#ffd700] rounded-full w-6 h-6 flex items-center justify-center text-black">C</span>
                    Connect teams
                </span>

            </div>

            <div>
                <ul className="flex gap-6 items-center font-bold">
                    <li className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200">
                        Products
                    </li>
                    <li className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200">
                        Startup tools
                    </li>
                    <li className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200">
                        Features
                    </li>
                    <li className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200">
                        Live support
                    </li>
                    <li className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200">
                        Our plans
                    </li>
                    <li>
                        <button className="bg-[#d7e933] border-2 border-black text-black px-6 py-2 rounded-lg font-bold shadow-[2px_2px_0px_0px_black] cursor-pointer hover:bg-[#d7e103] transition-colors duration-300">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
