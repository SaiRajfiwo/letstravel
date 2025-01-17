import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Access Restricted</h2>
          <p className="mt-2">Please <a href="/signup" className="text-blue-500 underline">sign up</a> or <a href="/login" className="text-blue-500 underline">log in</a> to view our services.</p>
        </div>
      </div>
    );
  }

  return children; // If logged in, render the child components
};

export default ProtectedRoute;
