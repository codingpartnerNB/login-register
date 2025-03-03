import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SocialArtPlatform = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('artists');

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const handleButtonClick = (e) => {
    // Ripple effect simulation
    e.currentTarget.style.transform = 'scale(0.95)';
    setTimeout(() => {
      e.currentTarget.style.transform = 'scale(1)';
    }, 100);
  };

  const navItems = [
    { icon: 'bi-house-door', label: 'Home', active: true },
    { icon: 'bi-bell', label: 'Notifications' },
    { icon: 'bi-shop', label: 'Shop' },
    { icon: 'bi-chat', label: 'Conversation' },
    { icon: 'bi-wallet2', label: 'Wallet' },
    { icon: 'bi-star', label: 'Subscription' },
    { icon: 'bi-person', label: 'My Profile' },
    { icon: 'bi-gear', label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed h-full w-16 md:w-64 bg-white shadow-lg p-4 md:p-6 flex flex-col transition-all duration-300">
        <div className="mb-8 text-2xl font-bold md:block hidden">LOGO</div>
        
        <nav className="flex-1 space-y-4 md:space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-4 ${
                item.active ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <i className={`bi ${item.icon} text-xl transition-transform duration-300 hover:scale-110`} />
              <span className="sidebar-labels hidden md:block">{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#"
          onClick={handleLogout}
          className="flex items-center space-x-4 text-gray-600 hover:text-red-500 mt-auto"
        >
          <i className="bi bi-box-arrow-right text-xl transition-transform duration-300 hover:scale-110" />
          <span className="sidebar-labels hidden md:block">Log out</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="ml-16 md:ml-64 flex-1 p-4 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <i className="bi bi-search absolute right-3 top-2.5 text-gray-400" />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              className="px-4 py-2 rounded-lg border hover:bg-gray-50 w-full md:w-auto"
              onClick={handleButtonClick}
            >
              <i className="bi bi-funnel" /> <span className="hidden md:inline">Filters</span>
            </button>
            <button
              className="bg-gradient-to-r from-teal-400 to-blue-400 text-white px-6 py-2 rounded-lg 
              transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 w-full md:w-auto cursor-pointer"
              onClick={handleButtonClick}
            >
              Become a Seller
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 mb-8">
          <button
            className={`pb-2 font-medium ${
              activeTab === 'artists'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('artists')}
          >
            Artists
          </button>
          <button
            className={`pb-2 font-medium ${
              activeTab === 'photographers'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('photographers')}
          >
            Photographers
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {/* Post 1 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  alt="Profile"
                />
                <div>
                  <h3 className="font-medium">Alice L.</h3>
                  <p className="text-gray-500 text-sm">@thewallart</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="bi bi-three-dots" />
              </button>
            </div>

            <p className="mb-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              className="w-full rounded-xl mb-4"
              alt="Post content"
            />

            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-heart transition-transform duration-200 hover:scale-125" />
                <span>9.8k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-chat transition-transform duration-200 hover:scale-125" />
                <span>8.6k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-share transition-transform duration-200 hover:scale-125" />
                <span>7.2k</span>
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  alt="Profile"
                />
                <div>
                  <h3 className="font-medium">Lara Leones</h3>
                  <p className="text-gray-500 text-sm">@thewallart</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="bi bi-three-dots" />
              </button>
            </div>

            <p className="mb-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <img
              src="pexels-humphrey.png"
              className="w-full rounded-xl mb-4"
              alt="Post content"
            />

            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-heart transition-transform duration-200 hover:scale-125" />
                <span>9.8k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-chat transition-transform duration-200 hover:scale-125" />
                <span>8.6k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-share transition-transform duration-200 hover:scale-125" />
                <span>7.2k</span>
              </button>
            </div>
          </div>


          {/* Post 3 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  alt="Profile"
                />
                <div>
                  <h3 className="font-medium">Leon</h3>
                  <p className="text-gray-500 text-sm">@thewallart</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="bi bi-three-dots" />
              </button>
            </div>

            <p className="mb-4 text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <img
              src="pexels-tobias.png"
              className="w-full rounded-xl mb-4"
              alt="Post content"
            />

            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-heart transition-transform duration-200 hover:scale-125" />
                <span>9.8k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-chat transition-transform duration-200 hover:scale-125" />
                <span>8.6k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                <i className="bi bi-share transition-transform duration-200 hover:scale-125" />
                <span>7.2k</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialArtPlatform;