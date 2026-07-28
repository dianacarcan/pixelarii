async function fetchArticles()
{
    try
    {
        const url = `http://localhost:3000/articles`;
        const response = await fetch(url);
        const articles = await response.json();

        return articles;
    }
    catch (error)
    {
        console.error("Error fetching the articles.", error);
        return [];
    }

}

function renderArticleCard(article) {
  return `
  <article>
    <div style="background-color: ${article.background};">${article.imagePlaceholder}</div>
    <div class="tag"> ${article.category} </div>
    <a href="article.html?slug=${article.slug}">${article.title} </a>
    
    <h4>${article.date} - ${article.readingTime}</h4>
    <p>${article.excerpt}</p>
  </article>
  `;
}

function renderCardList(articles) {
    const list = articles.map(article => renderArticleCard(article)).join("");
    document.getElementById("card-list").innerHTML = list;
}

let allArticles = [];

document.addEventListener("DOMContentLoaded", async () => {
    allArticles = await fetchArticles();
    if(allArticles.length === 0) {
        document.getElementById("card-list").innerHTML = "Error while loading the DOM content"
    } else {
        renderCardList(allArticles);
    }
});

const selector = document.querySelectorAll('[name="tags"]');

selector.forEach( (element) => {
    element.addEventListener("change", () => {
        const checkedValues = Array.from(selector)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        const filtered = allArticles.filter(article =>
        checkedValues.length === 0 || checkedValues.includes(article.category)
        );
        renderCardList(filtered);
    });
});


