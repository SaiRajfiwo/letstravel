import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceShops = ({ isLoggedIn }) => {
  const handleServiceShopsClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.google.com/maps/search/service+shops+near+me/@18.6162042,73.8161403,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D';
    } else {
      toast.error('Please sign up or log in to find service shops near you! 🛠️', {
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
        <source src="/letstravel/serviceStation.mp4" type="video/mp4" /> {/* Update with your video path */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black md:font-bold">Find Service Shops</h1>
        <p className="text-lg mb-8 text-black md:font-bold">Get assistance for your vehicle!</p>
        <p className="text-lg mb-4 text-black md:font-bold">
          {isLoggedIn ? (
            'We have service shops near you!'
          ) : (
            'Sign up to find service shops near you! 🛠️'
          )}
        </p>
        <button
          onClick={handleServiceShopsClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Find Service Shops
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

export default ServiceShops;
