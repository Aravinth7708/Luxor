import React, { useState } from 'react';or-backend.vercel.app";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { signInWithGoogle } from '../../utils/firebase';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(email, password);
      if (onClose) onClose();
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const googleUserData = await signInWithGoogle();
      await googleLogin(googleUserData);
      if (onClose) onClose();
    } catch (err) {
      console.error('Google login error:', err);
      setError('Failed to login with Google');
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component remains the same
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Log In</h2>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {loading ? 'Loading...' : 'Log In'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <span className="text-gray-500">or</span>
      </div>
      
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="w-full mt-4 border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <svg height="20" width="20" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;