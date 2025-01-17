import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hotels = ({ isLoggedIn }) => {
  const handleHotelSearch = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.makemytrip.com/hotels/';
    } else {
      // Use a string for the position instead of using toast.POSITION
      toast.error('Please sign up or log in to access hotel information! 🏨', {
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
        <source src="/letstravel/hotel.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black md:font-bold">Hotels</h1>
        <p className="text-lg mb-8 text-black md:font-bold">Feeling tired from a long drive? 🏍️💨</p>
        <p className="text-lg mb-4 text-black md:font-bold">
          {isLoggedIn
            ? 'Take a break, recharge, and refresh!'
            : 'Sign up to access nearby hotels and make your stay comfortable! 🌟'}
        </p>
        <button
          onClick={handleHotelSearch}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500 mb-8"
        >
          Search Hotels
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

export default Hotels;
