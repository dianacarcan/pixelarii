"use server";

import { getArticles } from "@/model/article";

const likesDb: Record<string, number> = {
  "article-1": 10,
  "article-2": 7,
  "article-3": 15,
  "article-4": 4,
  "article-5": 12,
};

export const getLikes = async (): Promise<Record<string, number>> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // pretend database read
  return likesDb;
};

export const toggleLike = async (
  slug: string,
  liked: boolean
): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await getArticles();
  const exists = response.some((article) => article.slug === slug);

  if (!exists) {
    throw new Error("Error: this article doesn't exist.");
  }

  if (!(slug in likesDb)) {
    likesDb[slug] = 0;
  }

  likesDb[slug] = Math.max(
    0,
    likesDb[slug] + (liked ? 1 : -1)
  );

  return likesDb[slug];
};