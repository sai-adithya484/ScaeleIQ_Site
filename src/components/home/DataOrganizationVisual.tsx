import React from 'react';
import './HomeVisuals.css';

export const DataOrganizationVisual: React.FC = () => {
  return (
    <div className="liv-vis-wrapper liv-vis-wrapper--org-base">
      <div className="liv-hero-image-wrapper">
        <img
          src="/assets/Sec_Hero_1.png"
          alt="SCAELEIQ Living Infrastructure Data Organization Platform"
          className="liv-hero-static-img"
          draggable={false}
        />
      </div>
    </div>
  );
};
