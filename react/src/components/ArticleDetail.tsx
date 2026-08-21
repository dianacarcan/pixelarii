import { Box, CardMedia, Chip, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Article } from './articles'

interface ArticleDetailProps {
  article: Article
}

export const ArticleDetail = ({ article }: ArticleDetailProps) => {
  return (
    <Box sx={{ maxWidth: 680, mx: 'auto', px: 2, py: 4 }}>

      <Typography
        component={Link}
        to="/"
        variant="body2"
        sx={{ textDecoration: 'none', color: 'text.primary', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
      >
        ← Back to all articles
      </Typography>

      <Box sx={{ width: 120, height: 2, bgcolor: 'primary.main', mt: 1, mb: 3 }} />

      <Chip
        label={article.label}
        size="small"
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 700,
          borderRadius: 1,
          mb: 2,
        }}
      />

      <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
        {article.title}
      </Typography>

      <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1.5px solid',
            borderColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 700,
            color: 'primary.main',
            flexShrink: 0,
          }}
        >
          {article.authorInitials}
        </Box>
        <Typography variant="body2">{article.author}</Typography>
        <Typography variant="body2" color="text.secondary">{article.date}</Typography>
        <Typography variant="body2" color="text.secondary">{article.read_time} min read</Typography>
      </Stack>

      <CardMedia
        component="img"
        image={article.imageUrl}
        alt={article.title}
        sx={{ width: '100%', borderRadius: 1, mb: 3 }}
      />

      <Typography variant="body1" sx={{ mb: 2 }}>
        There's a particular kind of silence you find only in Greece — not the silence of emptiness, but the silence of accumulated time. Standing at the edge of a cliff in Zakynthos, watching the turquoise water carve itself against white limestone, I understood for the first time what it means to be small in a beautiful way.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        I went to Greece thinking I was going on a food trip. I came back understanding something much harder to name.
      </Typography>

      <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 2 }}>
        Day one: arriving hungry
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        My flight landed in Athens at 6am. The city was still half-asleep, and the first thing I did — before hotel, before shower — was find a bakery. Tiropita, still warm from the oven, eaten standing on a pavement in the pale early light. That was the moment I knew this trip was going to be different.
      </Typography>

      <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2, my: 3 }}>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          "Food in Greece isn't a meal, it's an argument. Every taverna owner believes their grandmother invented the recipe, and honestly, they might be right."
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 3 }}>
        The markets in Athens are nothing like what you expect. Yes, there are olives — stacked in barrels, dozens of varieties, each with its own personality. But what gets you is the pace. Nobody rushes. The man behind the cheese counter has been cutting the same feta for thirty years and he will tell you exactly why that matters, in Greek, whether you understand it or not.
      </Typography>

      <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 2 }}>
        The islands change everything
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Taking the ferry from Piraeus to Santorini is an exercise in patience and, eventually, surrender. The sea is vast and indifferent and after two hours you stop checking your phone. By hour four you've accepted that you're simply a small object moving slowly across a large blue surface, and that this is fine.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Santorini's food is overpriced and the views are, frankly, absurd. Oia at sunset feels like someone turned the saturation up past what reality permits. But the best meal I had there wasn't at a clifftop restaurant — it was a paper plate of grilled octopus from a fisherman who had a cooler and a portable grill and absolutely no menu.
      </Typography>

      <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 2 }}>
        What I actually learned
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Greece taught me that slowness is a skill. That a two-hour lunch is not laziness — it's a practice. That food tastes different when it arrives without urgency, when the person who made it sat down at the table next to you and is also eating.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        I came home with olive oil, dried herbs, and a determination to stop eating lunch at my desk. I've managed one of those three things consistently.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        {article.tags.map((tag) => (
          <Chip key={tag} label={tag} variant="outlined" size="small" />
        ))}
      </Stack>

    </Box>
  )
}
