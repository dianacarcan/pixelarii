export interface Article {
    title : string;
    category : Category;
    excerpt : string;
    date : string;
    readingTime : string;
    imagePlaceholder : string;
    background : string;
    slug : string;
}

export interface ArticleDetail {
    title : string;
    tag : Category;
    author : string;
    date : string;
    readingTime : string;
    heroPlaceholder : string;
    body : string[];
    quote : string;
    tags : Category[];
    relatedArticles: { slug: string; title: string; meta: string }[];
}

export const CATEGORIES = ["Travel", "Food Theory", "Recipes", "Restaurants"] as const;

export type Category = typeof CATEGORIES[number];