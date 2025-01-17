import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VehicleInfo = ({ isLoggedIn }) => {
  const handleVehicleInfoClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.vehicleinfo.com';
    } else {
      toast.error('Please sign up or log in to access vehicle information! 🚗', {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/letstravel/vehicleinfo.mp4" type="video/mp4" /> {/* Updated path */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black md:font-bold">Vehicle Information</h1>
        <p className="text-lg mb-8 text-black md:font-bold">Get the information you need!</p>
        <p className="text-lg mb-4 text-black md:font-bold">
          {isLoggedIn ? (
            'Drive safely with the right information!'
          ) : (
            'Sign up to access vehicle information! 🚗'
          )}
        </p>
        <button
          onClick={handleVehicleInfoClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500 mb-8"
        >
          Access Vehicle Info
        </button>
      </div>

      <ToastContainer 
        position="top-center" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default VehicleInfo;
