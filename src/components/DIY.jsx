import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DIY = ({ isLoggedIn }) => {
  const handleAccessDIY = () => {
    if (!isLoggedIn) {
      toast.error('Please sign up or log in to access DIY videos for your road trip! 🛠️', {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="relative w-full h-[600px] text-center text-white">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/letstravel/DIY.mp4" type="video/mp4" /> {/* Updated path */}
        
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-30">
        <h1 className="text-3xl font-bold mb-6 text-black md:font-bold">DIY Road Trip Guides</h1>

        {isLoggedIn ? (
          <>
            <p className="mb-8 text-black md:font-bold">Stay tuned! We are working on something interesting just for you!</p>
            <p className="text-lg text-gray-300">Check back soon for exciting DIY tips and tricks for your next adventure!</p>
          </>
        ) : (
          <>
            <p className="mb-8 text-black md:font-bold">Get the best DIY videos for your next road trip!</p>
            <button
              onClick={handleAccessDIY}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              Watch DIY Videos
            </button>
          </>
        )}
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

export default DIY;
