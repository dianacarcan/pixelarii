import { useState, useEffect } from "react";
import type { Article, ArticleDetail } from "../types/types"

interface UseArticlesResult {
  data: Article[] | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

interface UseArticleResult {
  data: ArticleDetail | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export const useArticles = () : UseArticlesResult => {
    const [data, setData] = useState<Article[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = () => {
        setLoading(true);
        setError(null);
    fetch('http://localhost:3000/articles')
    .then((res) => {
        if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
    })
    .then(setData)
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
    };

    useEffect(() => {
        reload();
    }, []); // empty array — fetch once, when the component mounts

    return {data, loading, error, reload}

}

export const useArticle = (slug : string) : UseArticleResult => {
    const [data, setData] = useState<ArticleDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = () => {
        setLoading(true);
        setError(null);
    fetch(`http://localhost:3000/articles/${slug}`)
    .then((res) => {
        if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
    })
    .then(setData)
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
    };

    useEffect(() => {
        reload();
    }, [slug]); 

    return {data, loading, error, reload}

}