import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const dialogRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('YOUR_PUBLIC_API_URL/api/users/login', { // Update the URL here
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
        setMessage('Login successful!');
        dialogRef.current.close();
        navigate('/');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <dialog ref={dialogRef} id="login_modal" className="modal bg-black/70 rounded-2xl">
      <form
        method="dialog"
        className="modal-box bg-cover bg-center text-black "
        style={{
          backgroundImage: 'url(./bg-modal.jpg)',
          backgroundSize: 'full',
          backgroundPosition: 'center',
          
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-4xl flex-1 ml-48 text-black">Login</h2>
        <div className="px-10 py-14">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full ml-5 max-w-xs my-2 bg-white border-none"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full ml-5 max-w-xs my-2 bg-white border-none"
            value={formData.password}
            onChange={handleInputChange}
          />
          {message && <p className="text-white">{message}</p>}
        </div>
        <div className="modal-action">
          <button type="submit" className="btn mx-4 ml-12 mb-5 bg-green-400 text-black rounded-lg border-none hover:bg-green-500 px-4">Login</button>
          <button type="button" className="btn bg-red-400 text-black rounded-lg border-none hover:bg-red-500 px-4" onClick={() => dialogRef.current.close()}>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Login;
