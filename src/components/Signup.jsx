import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setUser, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const dialogRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('YOUR_PUBLIC_API_URL/api/users/signup', { // Update the URL here
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        setMessage('Signup successful!');
        dialogRef.current.close();
        navigate('/');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <dialog ref={dialogRef} id="signup_modal" className="modal bg-black/70 rounded-2xl">
      <form
        method="dialog"
        className="modal-box bg-cover bg-center text-black"
        style={{
          backgroundImage: 'url(./bg-modal.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-4xl ml-52 text-black">SIGNUP</h2>
        <div className="px-7 py-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered ml-10 w-full max-w-xs my-2 bg-white border-none"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered ml-10 w-full max-w-xs my-2 bg-white border-none"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered ml-10 w-full max-w-xs my-2 bg-white border-none"
            value={formData.password}
            onChange={handleInputChange}
          />
          {message && <p className="text-white">{message}</p>}
        </div>
        <div className="modal-action">
          <button type="submit" className="btn mx-4 mb-5 ml-16 rounded-lg px-3 bg-green-400 text-black border-none hover:bg-green-500">Signup</button>
          <button type="button" className="btn px-4 rounded-lg bg-red-400 text-black border-none hover:bg-red-500" onClick={() => dialogRef.current.close()}>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Signup;
