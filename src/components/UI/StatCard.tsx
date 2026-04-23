import React from 'react';
import { Briefcase } from 'lucide-react';
import './StatCard.css';

interface StatCardProps {
  label: string;
  value: number;
  subtextText: string;
  subtextHighlight: string;
  iconBg: string;
  iconColor: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  subtextText, 
  subtextHighlight, 
  iconBg, 
  iconColor,
  color
}) => {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="stat-info">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
        <span className="stat-subtext">
          <span className="highlight">{subtextHighlight}</span> {subtextText}
        </span>
      </div>
      <div className="stat-icon" style={{ backgroundColor: iconBg, color: iconColor }}>
        <Briefcase size={20} />
      </div>
    </div>
  );
};

export default StatCard;
