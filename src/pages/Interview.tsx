import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/UI/StatCard';
import EvaluationCard from '../components/UI/EvaluationCard';
import { 
  ChevronDown, 
  Search, 
  List, 
  LayoutGrid, 
  BarChart3, 
  Eye, 
  ExternalLink, 
  MoreVertical,
  Plus
} from 'lucide-react';
import './Interview.css';

const Interview = () => {
  const navigate = useNavigate();
  const [view, setView] = React.useState<'list' | 'kanban'>('list');

  const stats = [
    { label: "Today's Interview", value: 4, subtextText: "in next 5 days", subtextHighlight: "12", iconBg: "#dcfce7", iconColor: "#166534", color: "#22c55e" },
    { label: "Pending to Schedule", value: 8, subtextText: "Requires action", subtextHighlight: "3", iconBg: "#e0f2fe", iconColor: "#0369a1", color: "#0ea5e9" },
    { label: "Awaiting Feedback", value: 2, subtextText: "overdue reminders", subtextHighlight: "1", iconBg: "#fef3c7", iconColor: "#b45309", color: "#f59e0b" },
    { label: "Complete this week", value: 15, subtextText: "from last week", subtextHighlight: "+12%", iconBg: "#f3e8ff", iconColor: "#7e22ce", color: "#a855f7" },
  ];

  const evaluations = [
    { name: "Amir Khan", role: "Graphic Designer", avatar: "https://i.pravatar.cc/150?u=amir1", scores: { technical: 5, communication: 4, culture: 5 }, panelCount: 2 },
    { name: "Siti Nabila", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?u=siti", scores: { technical: 4, communication: 3, culture: 4 }, panelCount: 3 },
    { name: "Zulhelmi", role: "Graphic Designer", avatar: "https://i.pravatar.cc/150?u=zul", scores: { technical: 5, communication: 5, culture: 4 }, panelCount: 2 },
    { name: "Sarah Jane", role: "Senior Designer", avatar: "https://i.pravatar.cc/150?u=sarah", scores: { technical: 4, communication: 5, culture: 5 }, panelCount: 4 },
  ];

  const candidates = [
    { name: "Amir Khan", role: "Graphic Designer", date: "26th Dec 2025", time: "2:00 PM - 4:00 PM", score1: "94 %", score2: "94 %", avatar: "https://i.pravatar.cc/150?u=amir1" },
    { name: "Siti Nabila", role: "UI/UX Designer", date: "26th Dec 2025", time: "2:00 PM - 4:00 PM", score1: "88 %", score2: "92 %", avatar: "https://i.pravatar.cc/150?u=siti" },
    { name: "Zulhelmi", role: "Graphic Designer", date: "27th Dec 2025", time: "10:00 AM - 12:00 PM", score1: "91 %", score2: "89 %", avatar: "https://i.pravatar.cc/150?u=zul" },
    { name: "Sarah Jane", role: "Senior Designer", date: "27th Dec 2025", time: "2:30 PM - 4:30 PM", score1: "96 %", score2: "95 %", avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Fatin Aqilah", role: "Graphic Designer", date: "28th Dec 2025", time: "11:00 AM - 1:00 PM", score1: "85 %", score2: "87 %", avatar: "https://i.pravatar.cc/150?u=fatin" },
    { name: "Kevin Wong", role: "Brand Designer", date: "28th Dec 2025", time: "3:00 PM - 5:00 PM", score1: "92 %", score2: "90 %", avatar: "https://i.pravatar.cc/150?u=kevin" },
    { name: "Aisyah Humaira", role: "Graphic Designer", date: "29th Dec 2025", time: "9:00 AM - 11:00 AM", score1: "89 %", score2: "91 %", avatar: "https://i.pravatar.cc/150?u=aisyah" },
  ];

  const [isEvaluationExpanded, setIsEvaluationExpanded] = React.useState(true);

  return (
    <div className="interview-page">
      <h1 className="page-title">Interview</h1>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="section-container">
        <div className="section-header" onClick={() => setIsEvaluationExpanded(!isEvaluationExpanded)} style={{ cursor: 'pointer' }}>
          <h2 className="section-title">Evaluation Score Board</h2>
          <ChevronDown 
            size={20} 
            className="collapse-icon" 
            style={{ 
              transform: isEvaluationExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }} 
          />
        </div>
        
        <AnimatePresence>
          {isEvaluationExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
              className="evaluations-row"
            >
              {evaluations.map((evalItem, i) => (
                <EvaluationCard key={i} {...evalItem} />
              ))}
              <div className="empty-eval-card">
                <span>No candidate yet</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button className="tab">All (7)</button>
          <button className="tab">In Progress (0)</button>
          <button className="tab active">Interviewed (0)</button>
          <button className="tab">Evaluation (0)</button>
          <button className="tab">Passed (0)</button>
          <button className="tab">Reject (0)</button>
          <button className="tab">KIV (0)</button>
        </div>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <div className="filter-select">Job Title <ChevronDown size={16} /></div>
          <div className="filter-select">Work Arrangement <ChevronDown size={16} /></div>
          <div className="filter-select">Location <ChevronDown size={16} /></div>
        </div>

        <div className="actions-group">
          <div className="search-input-sm">
            <Search size={16} />
            <input type="text" placeholder="Search" />
          </div>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
            >
              <List size={18} /> List
            </button>
            <button 
              className={`toggle-btn ${view === 'kanban' ? 'active' : ''}`}
              onClick={() => setView('kanban')}
            >
              <LayoutGrid size={18} /> Kanban
            </button>
            <button className="toggle-btn scoreboard-btn" onClick={() => navigate('/scoreboard')}>
              <BarChart3 size={18} /> Score Board
            </button>
          </div>
        </div>
      </div>

      {view === 'list' ? (
        <div className="candidates-list">
          {candidates.map((candidate, i) => (
            <div key={i} className="candidate-row">
              <div className="candidate-info-main">
                <img src={candidate.avatar} alt={candidate.name} className="cand-avatar" />
                <div className="cand-details">
                  <span className="cand-name">{candidate.name}</span>
                  <span className="cand-role">{candidate.role}</span>
                </div>
              </div>
              
              <div className="cand-type">Graphic Designer</div>
              
              <div className="cand-datetime">
                <span className="cand-date">{candidate.date}</span>
                <span className="cand-time">{candidate.time}</span>
              </div>

              <div className="cand-panel">
                <div className="panel-avatars">
                  <img src="https://i.pravatar.cc/150?u=panel1" alt="Panel" />
                  <div className="add-panel"><Plus size={12} /></div>
                </div>
              </div>

              <div className="cand-scores">
                <span className="score-badge green">{candidate.score1}</span>
                <span className="score-badge green">{candidate.score2}</span>
              </div>

              <div className="cand-actions">
                <button className="evaluate-btn">Evaluate</button>
                <div className="action-icons">
                  <Eye size={18} />
                  <ExternalLink size={18} />
                  <MoreVertical size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="kanban-view">
          {[
            { title: "In Progress", count: 2, color: "#0ea5e9" },
            { title: "Interviewed", count: 3, color: "#22c55e" },
            { title: "Evaluation", count: 1, color: "#f59e0b" },
            { title: "Passed", count: 1, color: "#10b981" },
            { title: "Reject", count: 0, color: "#ef4444" }
          ].map((column, idx) => (
            <div key={idx} className="kanban-column">
              <div className="kanban-column-header" style={{ borderTop: `3px solid ${column.color}` }}>
                <div className="col-info">
                  <span className="col-title">{column.title}</span>
                  <span className="col-count">{column.count}</span>
                </div>
                <MoreVertical size={16} />
              </div>
              <div className="kanban-cards">
                {candidates.slice(idx, idx + (idx === 1 ? 3 : 1)).map((cand, i) => (
                  <div key={i} className="kanban-card">
                    <div className="k-card-header">
                      <span className="k-card-role">{cand.role}</span>
                      <MoreVertical size={14} />
                    </div>
                    <div className="k-card-user">
                      <img src={cand.avatar} alt={cand.name} />
                      <div className="k-card-info">
                        <span className="k-card-name">{cand.name}</span>
                        <span className="k-card-date">{cand.date}</span>
                      </div>
                    </div>
                    <div className="k-card-footer">
                      <div className="k-card-scores">
                        <span className="k-score">94%</span>
                      </div>
                      <div className="k-card-actions">
                        <Eye size={14} />
                        <button className="k-eval-btn">Evaluate</button>
                      </div>
                    </div>
                  </div>
                ))}
                {column.count === 0 && <div className="empty-column">No candidates</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Interview;
