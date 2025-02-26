import React from 'react';
import { Outlet } from 'react-router-dom';
import { Users } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Users className="h-6 w-6 text-indigo-400" />
          <h1 className="text-xl font-semibold">User Management System</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-gray-700 rounded-lg shadow-xl p-6 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
