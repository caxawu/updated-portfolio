// components/PasswordProtected.jsx
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LoaderCircle, ArrowRight } from 'lucide-react';
import PasswordIllustration from '../assets/images/caseStudies/password.png'

export default function PasswordProtected({ children }) {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

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
      <div>
        <img id="passwordImg" src={PasswordIllustration} alt="password illustration" loading="eager" />

        <div className="password">
          <div className="passTitle">
            Enter password to see page
          </div>
          <form onSubmit={handleSubmit} className="inputBox">
            <input
              type="text"
              placeholder="Password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className=""
            />
            <button
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" size={24} />
              ) : (
                <ArrowRight size={24} />
              )}
            </button>
          </form>
          <div className="pass-back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
            back to case studies
          </div>
        </div>

      </div>
    );
  }

  return <>{children}</>;
}
