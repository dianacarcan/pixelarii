import {ArticleCard} from "../components/ArticleCard.tsx"
import {Article, articles} from "../components/articles.ts"
import {CategoryPill} from "../components/CategoryPill.tsx";
import {Container, Stack, Typography} from '@mui/material'
import {SearchBar} from "../components/SearchBar.tsx"

function HomePage() {
  return (
    <Container>
      <Container id="Title">
        <Typography variant="h1">The Food Ninja Blog</Typography>
        <Typography variant="h2">A blog about food, experiences, and recipes</Typography>
        <SearchBar />
        <CategoryPill />
      </Container>
      

      <Stack>
        {articles.map((article: Article) => (
          <ArticleCard 
            imageUrl={article.imageUrl}
            label={article.label}
            title={article.title}
            date={article.date}
            read_time={article.read_time}
            excerpt={article.excerpt}
          />
        ))}
      </Stack>


    </Container>
  )
}

export default HomePage
