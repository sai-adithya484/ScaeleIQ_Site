import React from 'react';
import './HomeVisuals.css';

export const Govern360Visual: React.FC = () => {
  return (
    <div className="liv-vis-wrapper liv-vis-wrapper--gov">
      <div className="liv-gov-image-wrapper">
        <img
          src="/assets/Hero_Sec_2.png"
          alt="Govern360 Continuous AI-Driven Data Governance Platform"
          className="liv-gov-static-img"
          draggable={false}
        />
      </div>
    </div>
  );
};
