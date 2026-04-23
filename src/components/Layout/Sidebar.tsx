import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Calendar, 
  MessageSquare, 
  CreditCard, 
  Users2, 
  FileText, 
  Search,
  Headset,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Briefcase size={20} />, label: 'Manage Jobs', path: '/jobs' },
    { icon: <Users size={20} />, label: 'Applicants', path: '/applicants' },
    { icon: <Calendar size={20} />, label: 'Interview', path: '/interview' },
    { icon: <MessageSquare size={20} />, label: 'Chat', path: '/chat' },
    { icon: <CreditCard size={20} />, label: 'Billing', path: '/billing' },
    { icon: <Users2 size={20} />, label: 'Employees', path: '/employees' },
    { icon: <FileText size={20} />, label: 'Forms', path: '/forms' },
    { icon: <Search size={20} />, label: 'Search Talent', path: '/search' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM24.2857 11.4286H18.2857V25.1429H13.7143V11.4286H7.71429V6.85714H24.2857V11.4286Z" fill="#00A7B1"/>
          </svg>
        </div>
        <span className="logo-text">JobGiga</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink 
            key={item.label} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="support-card">
          <Headset size={20} />
          <span>Support</span>
        </div>
        
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-price">RM 29.00</span>
            <span className="promo-desc">Mental Health Screening</span>
            <button className="promo-btn">Try Now!</button>
          </div>
          <div className="promo-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
