import { Search, Bell, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="company-info">
          <div className="company-logo">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=AFED&backgroundColor=00a7b1" alt="AFED" />
          </div>
          <span className="company-name">AFED Digital Sdn Bhd</span>
          <button className="my-company-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
            My Company
          </button>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="premium-badge">
          Freemium
        </div>

        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Ahmad Yusuf</span>
            <span className="user-role">HR Manager</span>
          </div>
          <div className="user-avatar">
            <img src="https://i.pravatar.cc/150?u=ahmad" alt="User" />
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
