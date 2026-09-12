import React from 'react';
import { CaseStudy } from '../../data/caseStudies';

interface InfoTableProps {
  orgInfo: CaseStudy['orgInfo'];
}

export const InfoTable: React.FC<InfoTableProps> = ({ orgInfo }) => {
  return (
    <div className="case-study-info-table">
      <div className="case-study-info-table__item">
        <div className="case-study-info-table__label">ORGANIZATION</div>
        <div className="case-study-info-table__value">{orgInfo.organization}</div>
      </div>
      <div className="case-study-info-table__item">
        <div className="case-study-info-table__label">INDUSTRY</div>
        <div className="case-study-info-table__value">{orgInfo.industry}</div>
      </div>
      {orgInfo.customers && (
        <div className="case-study-info-table__item">
          <div className="case-study-info-table__label">CLIENTS / REACH</div>
          <div className="case-study-info-table__value">{orgInfo.customers}</div>
        </div>
      )}
      {orgInfo.revenue && (
        <div className="case-study-info-table__item">
          <div className="case-study-info-table__label">SCALE / VOLUME</div>
          <div className="case-study-info-table__value">{orgInfo.revenue}</div>
        </div>
      )}
    </div>
  );
};
