import React from 'react';
import './HomeVisuals.css';

export const DataIntelligenceVisual: React.FC = () => {
  return (
    <div className="liv-vis-wrapper liv-vis-wrapper--intel">
      <div className="liv-intel-image-wrapper">
        <img
          src="/assets/Sec_hero_3.png"
          alt="SCAELEIQ Data Integration and Intelligence Platform"
          className="liv-intel-static-img"
          draggable={false}
        />
      </div>
    </div>
  );
};
