import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [message, setMessage] = useState('');

  // Get your JWT token from wherever you are storing it (e.g., cookies, context, etc.)
  const token = localStorage.getItem('token') || ''; // Example of getting token from local storage

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in headers
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user info');
        }

        const userData = await response.json();
        setUserInfo(userData);
        setUpdatedName(userData.name || '');
        setUpdatedEmail(userData.email || '');
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setMessage('Error fetching user data.');
        navigate('/'); // Redirect to home if there's an error
      }
    };

    fetchUserInfo();
  }, [navigate, token]);

  const handleLogout = () => {
    // Clear your token management system (optional: remove token from local storage)
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/'); // Redirect to home page
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name: updatedName, email: updatedEmail };
    try {
      const response = await fetch('http://localhost:4001/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        setMessage('User info updated successfully.');
        setUserInfo(updatedUserData); // Update local user state
      } else {
        setMessage('Failed to update user info.');
      }
    } catch (error) {
      console.error('Update error:', error);
      setMessage('Error updating user info.');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {userInfo ? (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Account Details</h1>
          <div className="mb-4">
            <strong>Name:</strong> {userInfo.name}
          </div>
          <div className="mb-4">
            <strong>Email:</strong> {userInfo.email}
          </div>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Update Name:
              </label>
              <input
                type="text"
                id="name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Update Email:
              </label>
              <input
                type="email"
                id="email"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn w-full">
              Update
            </button>
            <button type="button" onClick={handleLogout} className="btn btn-outline w-full">
              Logout
            </button>
          </form>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Account;
