import React from 'react';
import { locationsList, departmentsList } from '../../data/jobs';

interface FilterBarProps {
  selectedLocation: string;
  selectedDepartment: string;
  onSelectLocation: (loc: string) => void;
  onSelectDepartment: (dept: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedLocation,
  selectedDepartment,
  onSelectLocation,
  onSelectDepartment,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <label className="filter-bar__label">Location:</label>
        <div className="filter-bar__pills">
          {locationsList.map((loc) => {
            const isActive = selectedLocation === loc;
            return (
              <button
                key={loc}
                type="button"
                className={`filter-pill ${isActive ? 'filter-pill--active' : ''}`}
                onClick={() => onSelectLocation(loc)}
              >
                {loc}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label">Department:</label>
        <div className="filter-bar__pills">
          {departmentsList.map((dept) => {
            const isActive = selectedDepartment === dept;
            return (
              <button
                key={dept}
                type="button"
                className={`filter-pill ${isActive ? 'filter-pill--active' : ''}`}
                onClick={() => onSelectDepartment(dept)}
              >
                {dept}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
