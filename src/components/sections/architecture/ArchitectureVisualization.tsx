import React from 'react';
import { ArchitectureLayer } from '../../../data/architectureLayers';

interface ArchitectureVisualizationProps {
  layers: ArchitectureLayer[];
  activeLayerIndex: number;
  onSelectLayerIndex: (index: number) => void;
}

export const ArchitectureVisualization: React.FC<ArchitectureVisualizationProps> = ({
  layers,
  activeLayerIndex,
  onSelectLayerIndex,
}) => {
  return (
    <div className="arch-stack-container">
      <div className="arch-stack">
        {layers.map((layer, index) => {
          const isActive = index === activeLayerIndex;
          return (
            <div
              key={layer.id}
              className={`arch-platform-plane arch-platform-plane--${index} ${
                isActive ? 'arch-platform-plane--active' : 'arch-platform-plane--inactive'
              }`}
              style={{
                top: `${index * 68}px`,
                zIndex: isActive ? 10 : 5 - index,
              }}
              onClick={() => onSelectLayerIndex(index)}
              title={`${layer.title} (Layer ${index + 1})`}
            >
              {/* Inactive Gray 3D Base Platform */}
              <img
                src="/assets/layer-agentic.png"
                alt=""
                aria-hidden="true"
                className="arch-platform-img arch-platform-img--gray"
              />

              {/* Active Radiant Cyan 3D Platform Layer (crossfaded smoothly) */}
              <img
                src="/assets/layer-agentic.png"
                alt=""
                aria-hidden="true"
                className={`arch-platform-img arch-platform-img--cyan ${
                  isActive ? 'arch-platform-img--visible' : ''
                }`}
              />

              {/* Ambient Cyan Soft Glow when active */}
              {isActive && <div className="arch-platform-glow" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
