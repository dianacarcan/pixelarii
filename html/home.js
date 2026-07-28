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
    }



}