import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import { articles } from '../components/articles'
import { ArticleDetail } from '../components/ArticleDetail'

function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === Number(id))

  if (!article) {
    return <Typography sx={{ p: 4 }}>Article not found.</Typography>
  }

  return (
    <Container maxWidth="md">
      <ArticleDetail article={article} />
    </Container>
  )
}

export default ArticlePage
