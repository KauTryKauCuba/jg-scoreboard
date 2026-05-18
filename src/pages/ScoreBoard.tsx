import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronDown, 
  Star
} from 'lucide-react';
import './ScoreBoard.css';

const topCandidates = [
  { name: "Sarah Jane", role: "Senior Designer", avatar: "https://i.pravatar.cc/150?u=sarah", scores: { technical: 5, communication: 5, culture: 5 }, rank: 1, color: "#f1fafa" },
  { name: "Amir Khan", role: "Graphic Designer", avatar: "https://i.pravatar.cc/150?u=amir1", scores: { technical: 5, communication: 4, culture: 5 }, rank: 2, color: "#f1fafa" },
  { name: "Kevin Wong", role: "Brand Designer", avatar: "https://i.pravatar.cc/150?u=kevin", scores: { technical: 5, communication: 5, culture: 5 }, rank: 3, isMain: true, color: "#e6f6f7" },
  { name: "Siti Nabila", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?u=siti", scores: { technical: 4, communication: 5, culture: 4 }, rank: 4, color: "#f1fafa" },
  { name: "Zulhelmi", role: "Graphic Designer", avatar: "https://i.pravatar.cc/150?u=zul", scores: { technical: 4, communication: 4, culture: 5 }, rank: 5, color: "#f1fafa" },
];

const ScoreBoard = () => {
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = React.useState(topCandidates[2]); // Default to the main one

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

  const panels = [
    { name: "Ahmad Yusuf", role: "HR Manager", avatar: "https://i.pravatar.cc/150?u=ahmad", scores: [9, 8, 9] },
    { name: "Lisa Thompson", role: "Design Lead", avatar: "https://i.pravatar.cc/150?u=lisa", scores: [8, 9, 8] },
    { name: "Michael Chen", role: "Product Manager", avatar: "https://i.pravatar.cc/150?u=michael", scores: [9, 7, 9] },
  ];

  const calculateTotal = (scores: { technical: number; communication: number; culture: number }) => {
    return ((scores.technical + scores.communication + scores.culture) / 15 * 100).toFixed(0);
  };

  return (
    <div className="scoreboard-page">
      <div className="page-header">
        <div className="header-title-row">
          <button className="back-btn" onClick={() => navigate('/interview')}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="page-title">Score Board</h1>
        </div>
        <div className="header-actions">
          <button className="export-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      <div className="filters-row">
        <div className="filter-select">Graphic Designer <ChevronDown size={16} /></div>
        <div className="filter-select disabled">Work Arrangement <ChevronDown size={16} /></div>
        <div className="filter-select disabled">Location <ChevronDown size={16} /></div>
      </div>

      <div className="section-card">
        <div className="section-header-row">
          <h2 className="section-title">Top 5 Evaluated Candidates</h2>
          <span className="best-match-hint">Candidate with highest total score is recommended for hire.</span>
        </div>
        
        <div className="top-candidates-grid">
          {topCandidates.map((cand, i) => (
            <div 
              key={i} 
              className={`rank-card ${selectedCandidate.name === cand.name ? 'active' : ''}`} 
              onClick={() => setSelectedCandidate(cand)}
              style={{ backgroundColor: selectedCandidate.name === cand.name ? '#e6f6f7' : '#f8fafc' }}
            >
              <div className="rank-badge">#{cand.rank}</div>
              <div className="rank-card-header">
                <img src={cand.avatar} alt={cand.name} className="rank-avatar" />
                {cand.rank === 1 && <div className="crown-icon">👑</div>}
              </div>
              <div className="rank-info">
                <span className="rank-name">{cand.name}</span>
                <span className="rank-role">{cand.role}</span>
              </div>
              <div className="rank-total-score">
                <span className="total-label">Overall Match</span>
                <span className="total-value">{calculateTotal(cand.scores)}%</span>
              </div>
              <div className="rank-scores">
                <div className="rank-score-item">
                  <span className="rank-score-label">Technical</span>
                  <div className="stars">{renderStars(cand.scores.technical)}</div>
                </div>
                <div className="rank-score-item">
                  <span className="rank-score-label">Communication</span>
                  <div className="stars">{renderStars(cand.scores.communication)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="evaluation-details-container">
        <div className="section-card eval-details-card">
          <div className="eval-details-header">
            <h2 className="section-title">Evaluation Details</h2>
            {selectedCandidate.rank === 1 && (
              <div className="recommendation-badge">
                <Star size={14} fill="currentColor" /> Top Choice
              </div>
            )}
          </div>
          
          <div className="eval-details-content">
            <div className="eval-candidate-profile">
              <div className="eval-avatar-wrapper">
                <img src={selectedCandidate.avatar} alt="Candidate" className="eval-avatar" />
                <div className="rank-overlay">#{selectedCandidate.rank}</div>
              </div>
              <div className="eval-info">
                <span className="eval-name">{selectedCandidate.name}</span>
                <span className="eval-role">{selectedCandidate.role}</span>
              </div>
              <div className="eval-metrics">
                <div className="metric-box">
                  <span className="metric-label">Matching Score</span>
                  <div className="metric-progress-wrapper">
                    <div className="metric-progress-bar" style={{ width: '94%' }}></div>
                    <span className="metric-value">94%</span>
                  </div>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Mental Health</span>
                  <div className="metric-progress-wrapper">
                    <div className="metric-progress-bar" style={{ width: '92%', backgroundColor: '#8b5cf6' }}></div>
                    <span className="metric-value">92%</span>
                  </div>
                </div>
              </div>
              
              <div className="candidate-tags">
                <span className="tag">Creative Thinker</span>
                <span className="tag">Team Player</span>
                <span className="tag">Fast Learner</span>
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-header">
                <span className="panel-title">Interview Panel Feedback</span>
                <span className="panel-count">3 Members</span>
              </div>
              
              <div className="panels-list">
                {panels.map((panel, i) => (
                  <div key={i} className="panel-item">
                    <div className="panel-user">
                      <img src={panel.avatar} alt={panel.name} />
                      <div className="panel-info">
                        <span className="panel-name">{panel.name}</span>
                        <span className="panel-role">{panel.role}</span>
                      </div>
                    </div>
                    <div className="panel-feedback-scores">
                      <div className="panel-score-row">
                        <span className="score-label">Rating</span>
                        <div className="stars">{renderStars(5)}</div>
                        <span className="score-num">{panel.scores[0]}/10</span>
                      </div>
                      <p className="panel-comment">
                        "Strong portfolio and excellent understanding of modern design principles."
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-sidebar">
          <div className="section-card hire-card">
            <h3 className="hire-title">Hire Decision</h3>
            <p className="hire-desc">Select an action for <strong>{selectedCandidate.name}</strong> based on the evaluation.</p>
            
            <div className="hire-actions">
              <button className="primary-hire-btn">Hire Candidate</button>
              <button className="secondary-hire-btn">Shortlist for Final</button>
              <button className="ghost-btn">Save for Later</button>
            </div>
            
            <div className="decision-note">
              <span className="note-title">Employer Note:</span>
              <textarea placeholder="Add a private note about this candidate..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
