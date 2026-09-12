import React from 'react';
import { MetricStat } from '../ui/MetricStat';
import { RevealAnimation } from '../ui/RevealAnimation';
import './ComparisonBar.css';

export const ComparisonBar: React.FC = () => {
  return (
    <section className="outcomes-section">
      <div className="container">
        <RevealAnimation variant="up">
          <div className="outcomes-header">
            <h2 className="outcomes-title">Real outcomes at breakthrough speed.</h2>
            <div className="outcomes-comparison">
              <div className="outcomes-comparison__item outcomes-comparison__item--old">
                <span className="outcomes-comparison__label">TRADITIONAL IT</span>
                <span className="outcomes-comparison__val">MONTHS</span>
              </div>
              <span className="outcomes-comparison__arrow">→</span>
              <div className="outcomes-comparison__item outcomes-comparison__item--new">
                <span className="outcomes-comparison__label">SCAELEIQ</span>
                <span className="outcomes-comparison__val">WEEKS</span>
              </div>
            </div>
          </div>

          <div className="outcomes-stats-grid">
            <div className="outcomes-stat-card">
              <MetricStat value="5X" label="Faster Execution with Parallel Agent Swarms" />
            </div>
            <div className="outcomes-stat-card">
              <MetricStat value="40%" label="More Cost-Effective Than Traditional Consultancies" />
            </div>
          </div>

          <div className="outcomes-kicker">
            <span>Give Your Data a Pulse</span>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
