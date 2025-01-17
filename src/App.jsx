import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import About from './about/About';
import Hotels from './components/Hotels';
import Hospitals from './components/Hospitals';
import FuelStations from './components/FuelStations';
import ServiceShops from './components/ServiceShops';
import Diy from './components/DIY';
import Restaurants from './components/Restaurants';
import VehicleInfo from './components/VehicleInfo';
import Weather from './components/WeatherInfo';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <Router>
      <Navbar 
        user={user} 
        setUser={setUser} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        handleLogout={handleLogout} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels isLoggedIn={isLoggedIn} />} />
        <Route path="/hospitals" element={<Hospitals isLoggedIn={isLoggedIn} />} />
        <Route path="/fuel-stations" element={<FuelStations isLoggedIn={isLoggedIn} />} />
        <Route path="/service-shops" element={<ServiceShops isLoggedIn={isLoggedIn} />} />
        <Route path="/diy" element={<Diy isLoggedIn={isLoggedIn} />} />
        <Route path="/restaurants" element={<Restaurants isLoggedIn={isLoggedIn} />} />
        <Route path="/vehicle-info" element={<VehicleInfo isLoggedIn={isLoggedIn} />} />
        <Route path="/weather" element={<Weather isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
