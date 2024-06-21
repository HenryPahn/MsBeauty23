import React from 'react';

export default function Sidebar () {
  return (
    <div className="h-screen bg-white text-black w-64 flex flex-col justify-between p-4">
      <div>
        <div className="mb-8">
          <img src="https://via.placeholder.com/150" alt="Logo" className="h-12 mx-auto"/>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">map</span>
            <span>Maps</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">person</span>
            <span>User Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">table_chart</span>
            <span>Tables</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">login</span>
            <span>Login</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">app_registration</span>
            <span>Register</span>
          </a>
        </nav>
      </div>
      <div>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">book</span>
            <span>Getting started</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">foundation</span>
            <span>Foundation</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <span className="material-icons">widgets</span>
            <span>Components</span>
          </a>
        </nav>
        <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white mt-4">
          <span className="material-icons">upgrade</span>
          <span>Upgrade to PRO</span>
        </a>
      </div>
    </div>
  );
};

