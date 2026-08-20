import { useParams } from 'react-router-dom';
export function useArticle(slug: string) {
  return {
    article: null,
    isLoading: false,
    error: null,
  };
}

export interface RelatedArticle {
  slug: string;
  title: string;
  meta: string;
}

export interface ArticleDetailType {
  title: string;
  tag: string;
  author: string;
  date: string;
  readingTime: string;
  heroPlaceholder: string;
  body: string[];
  quote?: string;
  tags: string[];
  relatedArticles: RelatedArticle[];
}

function ArticleContent({ article }: { article: ArticleDetailType }) {
  return (
    <article className="article-container">
      <header className="article-header">
        <span className="hero-placeholder">{article.heroPlaceholder}</span>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span>By {article.author}</span> • <span>{article.date}</span> • <span>{article.readingTime}</span>
        </div>
      </header>

      {article.quote && (
        <blockquote className="article-quote">
          "{article.quote}"
        </blockquote>
      )}

      <div className="article-body">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="article-tags">
          <h4>Tags:</h4>
          <ul>
            {article.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
      )}

      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="related-articles">
          <h3>Related Articles</h3>
          <ul>
            {article.relatedArticles.map((rel) => (
              <li key={rel.slug}>
                <strong>{rel.title}</strong> — <small>{rel.meta}</small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { article, isLoading, error } = useArticle(slug ?? '');

  if (isLoading) return <div className="loading">Loading article...</div>;
  if (error || !article) return <div className="error">Error loading article or article not found.</div>;

  return <ArticleContent key={slug} article={article} />;
}

export default ArticlePage;