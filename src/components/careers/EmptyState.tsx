import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onReset }) => {
  return (
    <div className="careers-empty-state">
      <div className="careers-empty-state__icon">
        <SearchX size={44} color="#868C98" />
      </div>
      <h3 className="careers-empty-state__title">No job openings found.</h3>
      <p className="careers-empty-state__desc">
        There are no results matching this criteria. Try changing your search filters.
      </p>
      <Button variant="secondary" size="md" onClick={onReset} showArrow={false}>
        Reset Filters
      </Button>
    </div>
  );
};
