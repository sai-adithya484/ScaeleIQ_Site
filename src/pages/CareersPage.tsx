import React, { useState, useEffect } from 'react';
import { jobs } from '../data/jobs';
import { JobCard } from '../components/cards/JobCard';
import { FilterBar } from '../components/careers/FilterBar';
import { EmptyState } from '../components/careers/EmptyState';
import { SectionLabel } from '../components/ui/SectionLabel';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { CTASection } from '../components/sections/CTASection';
import { homeCta } from '../data/ctaContent';
import '../components/careers/Careers.css';

export const CareersPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');

  useEffect(() => {
    document.title = 'Careers: Shape the Future with ScaeleIQ';
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesLocation =
      selectedLocation === 'All Locations' ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase().split(',')[0]);

    const matchesDepartment =
      selectedDepartment === 'All Departments' ||
      job.department.toLowerCase() === selectedDepartment.toLowerCase();

    return matchesLocation && matchesDepartment;
  });

  const handleResetFilters = () => {
    setSelectedLocation('All Locations');
    setSelectedDepartment('All Departments');
  };

  return (
    <div className="page-wrapper careers-page">
      {/* Header */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem' }}>
        <div className="container">
          <RevealAnimation variant="up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <SectionLabel>JOIN OUR TEAM</SectionLabel>
              <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
                Shape the future with our Team of innovators
              </h1>
              <p className="body-lg">
                We are building the autonomous architecture that powers the next era of enterprise computing. Come build with us.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Filter Bar & Job Listings */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <RevealAnimation variant="up">
            <FilterBar
              selectedLocation={selectedLocation}
              selectedDepartment={selectedDepartment}
              onSelectLocation={setSelectedLocation}
              onSelectDepartment={setSelectedDepartment}
            />

            {filteredJobs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <EmptyState onReset={handleResetFilters} />
            )}
          </RevealAnimation>
        </div>
      </section>

      <CTASection config={homeCta} />
    </div>
  );
};
