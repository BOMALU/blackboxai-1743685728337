import React from 'react';
import { FaFilm, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaFilm className="text-xl" />
          <h1 className="text-xl font-bold">AI Reel Generator</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-300 font-medium' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/create" 
            className={({ isActive }) => 
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-300 font-medium' : ''}`
            }
          >
            Create
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-300 font-medium' : ''}`
            }
          >
            Schedule
          </NavLink>
          <NavLink 
            to="/analytics" 
            className={({ isActive }) => 
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-300 font-medium' : ''}`
            }
          >
            Analytics
          </NavLink>
        </nav>
        <NavLink
          to="/login"
          className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-800 px-3 py-1 rounded-md transition-colors"
        >
          <FaUserCircle />
          <span>Login</span>
        </NavLink>
      </div>
    </header>
  );
}
