import { useState, useEffect, useCallback } from "react";
import type { Article, ArticleDetail } from "../types/types"

interface UseArticlesResult {
  articles: Article[] | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

interface UseArticleResult {
  article: ArticleDetail | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export const useArticles = () : UseArticlesResult => {
    const [articles, setArticles] = useState<Article[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(() => {
        setLoading(true);
        setError(null);
        fetch('http://localhost:3000/articles')
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`);
            }
            return res.json();
        })
        .then(setArticles)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return {articles, loading, error, reload}

}

export const useArticle = (slug : string) : UseArticleResult => {
    const [article, setArticle] = useState<ArticleDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(() => {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:3000/articles/${slug}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`);
            }
            return res.json();
        })
        .then(setArticle)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [slug]);

    useEffect(() => {
        reload();
    }, [slug, reload]); 

    return {article, loading, error, reload}

}