import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { insightPosts } from '../data/insightPosts';
import { TableOfContents } from '../components/article/TableOfContents';
import { ArticleBody } from '../components/article/ArticleBody';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import { RevealAnimation } from '../components/ui/RevealAnimation';
import { ArrowLeft, Clock, Linkedin, Twitter } from 'lucide-react';
import '../components/article/Article.css';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = insightPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ScaeleIQ Insights`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const shareUrl = window.location.href;

  return (
    <div className="page-wrapper article-detail-page">
      <article style={{ paddingTop: 'calc(72px + 3.5rem)', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <Link
            to="/insights"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--accent)',
              marginBottom: '2rem',
            }}
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <RevealAnimation variant="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-light)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {post.category}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="heading-xl" style={{ marginBottom: '1.5rem', lineHeight: 1.15 }}>
              {post.title}
            </h1>

            <p className="body-lg" style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>

            {/* Author Byline & Social Share */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 0',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '3rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{post.author.name}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  {post.author.role}, {post.author.company} • {post.publishDate}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Share on X"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Dynamic Table of Contents */}
            <TableOfContents items={post.toc} />

            {/* Rich Article Body */}
            <ArticleBody blocks={post.body} />

            {/* Article Footer Newsletter */}
            <div
              style={{
                marginTop: '4.5rem',
                padding: '3rem 2rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <h3 className="heading-sm">Enjoyed this article?</h3>
              <p className="body-md" style={{ maxWidth: '440px' }}>
                Subscribe to get the latest architecture briefs and modernization insights directly to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </RevealAnimation>
        </div>
      </article>
    </div>
  );
};
