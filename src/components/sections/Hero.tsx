import React from 'react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { BackgroundVideo } from '../ui/BackgroundVideo';
import { RevealAnimation } from '../ui/RevealAnimation';
import './Hero.css';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: React.ReactNode;
  primaryButton?: { label: string; href?: string; to?: string };
  secondaryButton?: { label: string; href?: string; to?: string };
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  imageAlt = 'Hero visual',
  videoSrc,
  className = '',
}) => {
  return (
    <section className={`hero-section ${videoSrc ? 'hero-section--with-video' : ''} ${!imageSrc ? 'hero-section--compact' : ''} ${className}`}>
      {videoSrc && <BackgroundVideo src={videoSrc} />}

      <div className="container hero-container">
        <RevealAnimation variant="up">
          <div className="hero-content">
            {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
            <h1 className="hero-title">{title}</h1>
            <div className="hero-desc">{description}</div>

            {(primaryButton || secondaryButton) && (
              <div className="hero-actions">
                {primaryButton && (
                  <Button
                    to={primaryButton.to}
                    href={primaryButton.href}
                    variant="primary"
                    size="lg"
                  >
                    {primaryButton.label}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    to={secondaryButton.to}
                    href={secondaryButton.href}
                    variant="secondary"
                    size="lg"
                  >
                    {secondaryButton.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </RevealAnimation>

        {imageSrc && (
          <RevealAnimation variant="up" delayMs={150} className="hero-image-wrap">
            <div className="hero-image-frame">
              <img src={imageSrc} alt={imageAlt} className="hero-image" />
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};
