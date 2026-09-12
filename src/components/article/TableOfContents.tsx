import React from 'react';
import { TocItem } from '../../data/insightPosts';

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="article-toc">
      <div className="article-toc__heading">Table of contents</div>
      <nav className="article-toc__nav">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`article-toc__link article-toc__link--level-${item.level}`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
};
