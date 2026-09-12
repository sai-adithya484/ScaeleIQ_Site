import React, { useState } from 'react';
import { architectureLayers } from '../../../data/architectureLayers';
import { ArchitectureLayerSelector } from './ArchitectureLayerSelector';
import { ArchitectureScene3D } from './ArchitectureScene3D';
import { ArchitectureDetail } from './ArchitectureDetail';
import { SectionLabel } from '../../ui/SectionLabel';
import { RevealAnimation } from '../../ui/RevealAnimation';
import './Architecture.css';

export const ArchitectureSection: React.FC = () => {
  // Single source of truth: selectedLayer (0 = Ingestion, 1 = Orchestration, etc.)
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const handleSelectLayer = (index: number) => {
    setSelectedLayer(index);
  };

  const currentLayer = architectureLayers[selectedLayer] || architectureLayers[0];

  return (
    <section id="architecture" className="arch-section">
      <div className="container arch-container">
        {/* Top Section Header */}
        <div className="arch-header">
          <RevealAnimation variant="up">
            <SectionLabel>THE AGENTIC ARCHITECTURE</SectionLabel>
            <h2 className="heading-lg arch-header__title">
              One system. Five intelligent layers.
            </h2>
            <p className="body-lg arch-header__subtitle">
              Explore how data moves from discovery to autonomous execution.
            </p>
          </RevealAnimation>
        </div>

        {/* 3-Column Interactive Architecture Grid */}
        <div className="arch-interactive-grid">
          {/* Left Column: Compact Architecture Navigation */}
          <div className="arch-col arch-col--left">
            <ArchitectureLayerSelector
              layers={architectureLayers}
              selectedLayer={selectedLayer}
              onSelectLayer={handleSelectLayer}
            />
          </div>

          {/* Center Column: 3D Living Agentic Centerpiece */}
          <div className="arch-col arch-col--center">
            <ArchitectureScene3D
              layers={architectureLayers}
              selectedLayer={selectedLayer}
              onSelectLayer={handleSelectLayer}
            />
          </div>

          {/* Right Column: Concise Dynamic Information Panel */}
          <div className="arch-col arch-col--right">
            <ArchitectureDetail
              layer={currentLayer}
              totalLayers={architectureLayers.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
