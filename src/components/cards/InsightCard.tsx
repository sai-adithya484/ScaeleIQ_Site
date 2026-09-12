import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { InsightPost } from '../../data/insightPosts';
import './InsightCard.css';

interface InsightCardProps {
  post: InsightPost;
}

export const InsightCard: React.FC<InsightCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.slug}`} className="insight-card">
      <div className="insight-card__meta">
        <span className="insight-card__category">{post.category}</span>
        <span className="insight-card__divider">•</span>
        <span className="insight-card__read-time">
          <Clock size={14} />
          {post.readTime}
        </span>
      </div>

      <h3 className="insight-card__title">{post.title}</h3>
      <p className="insight-card__excerpt">{post.excerpt}</p>

      <div className="insight-card__footer">
        <div className="insight-card__author">
          <span className="insight-card__author-name">{post.author.name}</span>
          <span className="insight-card__author-role">({post.author.role})</span>
        </div>
        <div className="insight-card__learn-more">
          <span>Read article</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </Link>
  );
};
