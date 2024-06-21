import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg">DASHBOARD</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
          />
          <span className="absolute right-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l2-2m4-4l2-2M4 6h16M4 10h16M4 14h8"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white">Jessica Jones</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;