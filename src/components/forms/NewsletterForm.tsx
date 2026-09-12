import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import './NewsletterForm.css';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  if (status === 'success') {
    return (
      <div className="newsletter-success">
        <CheckCircle size={20} color="#00B4D8" />
        <span>Thank you! Your submission has been received!</span>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your business email"
        className="newsletter-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="primary" size="md" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Subscribing...' : 'Sign up to stay updated'}
      </Button>
    </form>
  );
};
