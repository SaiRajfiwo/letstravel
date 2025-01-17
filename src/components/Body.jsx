import React, { useState } from 'react';
import Signup from './Signup';

function Body() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden"> {/* Prevent overflow */}
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80" // Ensure the video covers the full screen
                    autoPlay 
                    loop 
                    muted
                    src="/letstravel/body-bg.mp4" // Update the path to include the repository name
                />
                {/* Overlay for background video */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> {/* Black overlay with 30% opacity */}
                <div className="hero-content text-neutral-content text-center relative z-10"> {/* Centered content */}
                    <div className="w-full text-orange-50 p-6 max-w-screen-lg mx-auto"> {/* Center content within max width */}
                        <h1 className="mb-5 text-5xl font-bold">Hellooo!!
                            <span className="overflow-hidden text-6xl font-bold">
                                <div className="slide-animation flex justify-center">
                                    <span className="text-yellow-500 hover:text-white">H</span>
                                    <span className="text-green-500 hover:text-white">O</span>
                                    <span className="text-blue-500 hover:text-white">D</span>
                                    <span className="text-orange-500 hover:text-white">O</span>
                                    <span className="text-purple-500 hover:text-white">P</span>
                                    <span className="text-red-500 hover:text-white">H</span>
                                    <span className="text-teal-500 hover:text-white">I</span>
                                    <span className="text-pink-500 hover:text-white">L</span>
                                    <span className="text-indigo-500 hover:text-white">E</span>
                                    <span className="text-cyan-500 hover:text-white">!</span>
                                </div>
                            </span>
                        </h1>
                        <h1 className="text-4xl font-bold mb-4">Welcome to Lets Travel!</h1>
                        <p className="mb-4">
                            At Lets Travel!, we invite you to embark on a journey of exploration and
                            discovery. Our platform is designed to help you uncover the hidden
                            treasures of the world and connect with fellow travelers who share your
                            passion for adventure.
                        </p>
                        <p className="mb-4">
                            Whether you're looking for inspiration for your next trip or seeking
                            insights into local culture and attractions, Ghumte Haii is here to
                            guide you every step of the way. Let's explore together!
                        </p>
                    </div>
                </div>
                {/* Render Signup modal based on state */}
                {isModalOpen && <Signup closeModal={closeModal} />} {/* Pass the close function */}
            </div>
        </>
    );

}

export default Body;
