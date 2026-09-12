import React from 'react';
import { InsightPost } from '../../data/insightPosts';
import { Check } from 'lucide-react';

interface ArticleBodyProps {
  blocks: InsightPost['body'];
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ blocks }) => {
  return (
    <div className="article-body">
      {blocks.map((block, idx) => (
        <section key={idx} className="article-body__section">
          {block.heading && (
            <h2 id={block.headingId} className="article-body__heading">
              {block.heading}
            </h2>
          )}

          {block.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="article-body__p">
              {p}
            </p>
          ))}

          {block.callouts && block.callouts.length > 0 && (
            <div className="article-body__callouts">
              {block.callouts.map((callout, cIdx) => (
                <div key={cIdx} className="article-body__callout">
                  <span className="article-body__callout-icon">
                    <Check size={16} />
                  </span>
                  <span>{callout}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
