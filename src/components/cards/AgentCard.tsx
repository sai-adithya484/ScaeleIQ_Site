import React from 'react';
import { Bot, Database, Code2, Layers, Brain, Cpu, ShieldCheck } from 'lucide-react';
import { Agent } from '../../data/agents';
import './AgentCard.css';

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'workflow': return <Bot size={22} color="#00B4D8" />;
      case 'database': return <Database size={22} color="#00B4D8" />;
      case 'code': return <Code2 size={22} color="#00B4D8" />;
      case 'layers': return <Layers size={22} color="#00B4D8" />;
      case 'brain': return <Brain size={22} color="#00B4D8" />;
      case 'cpu': return <Cpu size={22} color="#00B4D8" />;
      case 'shield': return <ShieldCheck size={22} color="#00B4D8" />;
      default: return <Bot size={22} color="#00B4D8" />;
    }
  };

  return (
    <div className="agent-card">
      <div className="agent-card__header">
        <div className="agent-card__icon-wrap">
          {getIcon(agent.iconName)}
        </div>
        {agent.tag && <span className="agent-card__tag">{agent.tag}</span>}
      </div>
      <div className="agent-card__body">
        <h3 className="agent-card__name">{agent.name}</h3>
        <div className="agent-card__role">{agent.role}</div>
        <p className="agent-card__desc">{agent.description}</p>
      </div>
    </div>
  );
};
