import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WeatherInfo = ({ isLoggedIn }) => {
  const handleWeatherInfoClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.weather.com';
    } else {
      toast.error('Please sign up or log in to access weather information! ☀️🌧️', {
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
        <source src="/letstravel/weather.mp4" type="video/mp4" /> {/* Updated path */}
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-black md:font-bold">Weather Updates</h1>
        <p className="text-lg mb-8 text-black md:font-bold">Stay updated with the latest weather!</p>
        <p className="text-lg mb-4 text-black md:font-bold">
          {isLoggedIn ? (
            'Know before you go!'
          ) : (
            'Sign up to access weather information! ☀️🌧️'
          )}
        </p>
        <button
          onClick={handleWeatherInfoClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Check Weather
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

export default WeatherInfo;
