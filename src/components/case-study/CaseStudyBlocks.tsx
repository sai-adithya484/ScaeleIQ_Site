import React from 'react';
import { CaseStudy } from '../../data/caseStudies';

export const ChallengeBlock: React.FC<{ items: CaseStudy['challenge'] }> = ({ items }) => {
  return (
    <div className="case-study-block">
      <h2 className="case-study-block__title">The Challenge</h2>
      <div className="case-study-block__grid">
        {items.map((item, idx) => (
          <div key={idx} className="case-study-block__card">
            <h3 className="case-study-block__card-title">{item.heading}</h3>
            <p className="case-study-block__card-body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SolutionBlock: React.FC<{ solution: CaseStudy['solution'] }> = ({ solution }) => {
  return (
    <div className="case-study-block">
      <h2 className="case-study-block__title">ScaeleIQ’s Solution</h2>
      <p className="case-study-block__intro">{solution.intro}</p>
      <div className="case-study-block__grid">
        {solution.sections.map((sec, idx) => (
          <div key={idx} className="case-study-block__card">
            <h3 className="case-study-block__card-title">{sec.heading}</h3>
            <p className="case-study-block__card-body">{sec.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ResultsBlock: React.FC<{ results: CaseStudy['results'] }> = ({ results }) => {
  return (
    <div className="case-study-block">
      <h2 className="case-study-block__title">The Results</h2>
      <p className="case-study-block__intro">{results.intro}</p>
      <div className="case-study-block__grid">
        {results.sections.map((sec, idx) => (
          <div key={idx} className="case-study-block__card case-study-block__card--highlight">
            <h3 className="case-study-block__card-title">{sec.heading}</h3>
            <p className="case-study-block__card-body">{sec.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
