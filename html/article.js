async function fetchArticle(slug) {
    try {
        const url = `http://localhost:3000/articles/${slug}`;
        const response = await fetch(url);
        const article = await response.json();

        return article;
    }
    catch (error) {
        console.error("Error fetching the article.", error);
        return null;
    }
}

function renderArticleDetail(article) {
    document.getElementById("article-tag").textContent = article.tag;
    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-author").textContent = article.author;
    document.getElementById("article-date").textContent = article.date;
    document.getElementById("article-read-time").textContent = article.readingTime;

    const initials = article.author.split(" ").map(word => word[0]).join("");
    document.getElementById("article-avatar").textContent = initials;

    let bodyHtml = article.body.map(paragraph => `<p>${paragraph}</p>`).join("");

    if (article.quote) {
        bodyHtml += `<blockquote>${article.quote}</blockquote>`;
    }

    document.getElementById("article-body").innerHTML = bodyHtml;

    const tagsHtml = article.tags.map(t => `<li>${t}</li>`).join("");
    document.getElementById("article-tags").innerHTML = tagsHtml;
}

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    if (!slug) {
        document.getElementById("article-body").innerHTML = "No article specified.";
        return;
    }

    const article = await fetchArticle(slug);

    if (!article) {
        document.getElementById("article-body").innerHTML = "Error while loading the article.";
    } else {
        renderArticleDetail(article);
    }
});