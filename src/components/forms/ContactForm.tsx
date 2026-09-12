import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus('submitting');
    // Simulate frontend submission
    setTimeout(() => {
      setStatus('success');
      onSuccess?.();
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: '',
      });
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success-card">
        <CheckCircle size={48} color="#00B4D8" />
        <h3 className="form-success-title">Thank you! Your submission has been received!</h3>
        <p className="form-success-desc">Our solutions engineering team will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className="form-error-alert">
          <AlertCircle size={20} />
          <span>Oops! Something went wrong while submitting the form.</span>
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="form-required">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className={`form-input ${validationErrors.firstName ? 'form-input--error' : ''}`}
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
          />
          {validationErrors.firstName && (
            <span className="form-error-msg">{validationErrors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="form-required">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className={`form-input ${validationErrors.lastName ? 'form-input--error' : ''}`}
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
          />
          {validationErrors.lastName && (
            <span className="form-error-msg">{validationErrors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Business Email <span className="form-required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${validationErrors.email ? 'form-input--error' : ''}`}
          placeholder="jane@company.com"
          value={formData.email}
          onChange={handleChange}
        />
        {validationErrors.email && (
          <span className="form-error-msg">{validationErrors.email}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-textarea"
          placeholder="Tell us about your data infrastructure and migration goals..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </div>
    </form>
  );
};
