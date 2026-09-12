import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { Job } from '../../data/jobs';
import { Button } from '../ui/Button';
import './JobCard.css';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card__info">
        <h3 className="job-card__title">{job.title}</h3>
        <div className="job-card__meta">
          <span className="job-card__meta-item">
            <MapPin size={14} />
            {job.location}
          </span>
          <span className="job-card__divider">•</span>
          <span className="job-card__meta-item">
            <Briefcase size={14} />
            {job.department}
          </span>
          <span className="job-card__divider">•</span>
          <span className="job-card__meta-item">
            <Clock size={14} />
            {job.employmentType} ({job.workMode})
          </span>
        </div>
      </div>
      <div className="job-card__action">
        <Button href={job.applyUrl} variant="secondary" size="sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
};
