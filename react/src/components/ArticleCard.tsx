import { Box, Card, CardActionArea, CardMedia, Typography, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface ArticleProps {
    id: number;
    imageUrl: string;
    label: string;
    title: string;
    date: string;
    read_time: number;
    excerpt: string;
}

export const ArticleCard: React.FC<ArticleProps> = ({ id, imageUrl, label, title, date, read_time, excerpt }: ArticleProps) => {
    const navigate = useNavigate()

    return (
        <Stack direction="column" spacing={10}>
            <Card onClick={() => navigate(`/article/${id}`)} sx={{ cursor: 'pointer' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={imageUrl}
                        alt={title}
                    />
                    <Box>
                        <Typography variant="h1">{label}</Typography>
                        <Typography variant="h2">{title}</Typography>
                        <Typography variant="h3">{date} • {read_time} min read</Typography>
                        <Typography variant="body1">{excerpt}</Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Stack>
    )
}
