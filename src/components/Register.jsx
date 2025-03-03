import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, AlertCircle, UserPlus, Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account. Email may already be in use.');
      console.error(err);
    }

    setLoading(false);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Shining Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing Circles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsla(${Math.random() * 360}, 100%, 70%, 0.2)`,
              filter: 'blur(60px)',
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Glowing Lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-sweep"
            style={{
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(10px)',
            }}
          />
        ))}
      </div>

      {/* Gradient Container */}
      <div className="max-w-md w-full backdrop-blur-sm bg-white/10 rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] overflow-hidden border border-white/20 relative z-10">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mb-4 shadow-lg">
              <UserPlus size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Create an account</h2>
            <p className="text-purple-200">Join us today and get started</p>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg flex items-center text-red-100">
              <AlertCircle size={18} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-purple-300" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-purple-300/30 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-transparent text-white placeholder-purple-300/70 transition-all duration-300"
                  placeholder="you@example.com"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-purple-300" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-10 py-3 bg-white/10 border border-purple-300/30 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-transparent text-white placeholder-purple-300/70 transition-all duration-300"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              <p className="mt-1 text-xs text-purple-200/80">Must be at least 6 characters</p>
            </div>
            
            <div className="group">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-purple-200 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-purple-300" />
                </div>
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-10 py-3 bg-white/10 border border-purple-300/30 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-transparent text-white placeholder-purple-300/70 transition-all duration-300"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-300 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_12px_rgba(255,105,180,0.4)] hover:shadow-[0_6px_18px_rgba(255,105,180,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <UserPlus size={18} className="mr-2" />
                )}
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-purple-200">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-purple-300 hover:text-white transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float { animation: float 6s infinite; }

          @keyframes sweep {
            0% { transform: rotate(0deg) translateX(-100%); }
            100% { transform: rotate(360deg) translateX(100%); }
          }
          .animate-sweep { animation: sweep 10s infinite linear; }
        `}
      </style>
    </div>
  );
}