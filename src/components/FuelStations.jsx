import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FuelStations = ({ isLoggedIn }) => {
  const handleFuelStationsClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.google.com/maps/search/fuel+station+near+me/@19.1700588,77.3336351,12.75z?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D';
    } else {
      toast.error('Please sign up or log in to find fuel stations near you! ⛽', {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/letstravel/fuelStation.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black">Out of Fuel?</h1>
        <p className="text-lg mb-8 text-black md:font-bold">Find nearby fuel stations quickly!</p>
        <p className="text-lg mb-4 text-black md:font-bold">
          {isLoggedIn ? (
            'Get back on the road with ease!'
          ) : (
            'Sign up to find fuel stations near you! ⛽'
          )}
        </p>
        <button
          onClick={handleFuelStationsClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Find Fuel Stations
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

export default FuelStations;
