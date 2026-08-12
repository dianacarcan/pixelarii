import theme from "../themes/theme.ts"
import {ArticleCard} from "../components/ArticleCard.tsx"
import {Label, Article, articles} from "../components/articles.ts"
import {CategoryPill} from "../components/CategoryPill.tsx";
import { Link, Box, Stack} from '@mui/material'

function HomePage() {
  return (
    <Box>
      <Box id="Title">
        <h2>The Food Ninja Blog</h2>
        <h3>A blog about food, experiences, and recipes</h3>
        <input placeholder="Search articles..."></input>
        <CategoryPill />
      </Box>

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


    </Box>
  )
}

export default HomePage
