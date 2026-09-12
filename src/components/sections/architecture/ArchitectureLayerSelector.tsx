import React from 'react';
import { ArrowRight, Database, Cpu, Layers, ShieldCheck, GitFork } from 'lucide-react';
import { ArchitectureLayer } from '../../../data/architectureLayers';

interface ArchitectureLayerSelectorProps {
  layers: ArchitectureLayer[];
  selectedLayer: number;
  onSelectLayer: (index: number) => void;
}

export const ArchitectureLayerSelector: React.FC<ArchitectureLayerSelectorProps> = ({
  layers,
  selectedLayer,
  onSelectLayer,
}) => {
  const getLayerIcon = (id: string, isSelected: boolean) => {
    const color = isSelected ? 'var(--accent)' : 'var(--text-muted)';
    const size = 16;

    switch (id) {
      case 'ingestion':
        return <Database size={size} color={color} />;
      case 'orchestration':
        return <Cpu size={size} color={color} />;
      case 'ontology':
        return <Layers size={size} color={color} />;
      case 'governance':
        return <ShieldCheck size={size} color={color} />;
      case 'pipeline':
      default:
        return <GitFork size={size} color={color} />;
    }
  };

  return (
    <nav className="arch-nav-stack" aria-label="Architecture layers navigation">
      <div className="arch-nav-header">
        <span className="arch-nav-header__title">PIPELINE LAYERS</span>
        <span className="arch-nav-header__count">5 Stages</span>
      </div>

      <div className="arch-nav-list" role="tablist" aria-orientation="vertical">
        {layers.map((layer, index) => {
          const isSelected = index === selectedLayer;

          return (
            <button
              key={layer.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`arch-nav-item ${isSelected ? 'arch-nav-item--selected' : ''}`}
              onClick={() => onSelectLayer(index)}
            >
              {/* Cyan active track indicator bar */}
              <div
                className={`arch-nav-indicator ${isSelected ? 'arch-nav-indicator--active' : ''
                  }`}
              />

              <div className="arch-nav-num-box">
                <span className="arch-nav-num">{layer.number}</span>
              </div>

              <div className="arch-nav-info">
                <div className="arch-nav-title-row">
                  <span className="arch-nav-title">{layer.title}</span>
                  {isSelected && <span className="arch-nav-badge">ACTIVE</span>}
                </div>
                <span className="arch-nav-sub">{layer.tagline}</span>
              </div>

              <div className="arch-nav-icon-end">
                {getLayerIcon(layer.id, isSelected)}
                <ArrowRight
                  size={14}
                  className={`arch-nav-arrow ${isSelected ? 'arch-nav-arrow--visible' : ''
                    }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
