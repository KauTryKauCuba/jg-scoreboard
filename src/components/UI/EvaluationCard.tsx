import React from 'react';
import { Star, Maximize2 } from 'lucide-react';
import './EvaluationCard.css';

interface EvaluationCardProps {
  name: string;
  role: string;
  avatar: string;
  scores: {
    technical: number;
    communication: number;
    culture: number;
  };
  panelCount: number;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({ name, role, avatar, scores, panelCount }) => {
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < count ? "#ffb000" : "none"} 
        stroke={i < count ? "#ffb000" : "#cbd5e1"} 
      />
    ));
  };

  return (
    <div className="eval-card">
      <div className="eval-card-header">
        <div className="user-profile-sm">
          <img src={avatar} alt={name} />
          <div className="user-profile-info">
            <span className="user-name-sm">{name}</span>
            <span className="user-role-sm">{role}</span>
          </div>
        </div>
        <button className="expand-btn">
          <Maximize2 size={16} color="#00a7b1" />
        </button>
      </div>

      <div className="eval-stats-summary">
        <div className="eval-stat-row">
          <span className="eval-stat-label">Average</span>
          <span className="eval-stat-label">Panel <span className="panel-badge">{panelCount}</span></span>
        </div>
        
        <div className="eval-stat-item">
          <span className="eval-item-label">Technical Skills</span>
          <div className="stars">{renderStars(scores.technical)}</div>
        </div>
        
        <div className="eval-stat-item">
          <span className="eval-item-label">Communication</span>
          <div className="stars">{renderStars(scores.communication)}</div>
        </div>
        
        <div className="eval-stat-item">
          <span className="eval-item-label">Culture Fit</span>
          <div className="stars">{renderStars(scores.culture)}</div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationCard;
