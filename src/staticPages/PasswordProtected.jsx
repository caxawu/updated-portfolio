// components/PasswordProtected.jsx
import { useState, useEffect } from 'react';

export default function PasswordProtected({ children }) {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/.netlify/functions/check-password', {
        method: 'POST',
        body: JSON.stringify({ password: enteredPassword }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('unlocked', 'true');
      } else {
        alert('Incorrect password');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }

    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 p-4 bg-gray-100">
        <h1 className="text-xl font-semibold">Enter password to view this page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Submit'}
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
