import {Box, Card, CardMedia, Typography, Stack} from '@mui/material'

interface ArticleProps {
    imageUrl: string;
    label: string;
    title: string;
    date: string;
    read_time: number;
    excerpt: string;
}

export const ArticleCard: React.FC<ArticleProps> = ({ imageUrl,label ,title, date, read_time, excerpt }: ArticleProps) => {
    return (
            <Stack direction="column" spacing={10} >
            <Card >
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
            </Card>
            </Stack>

    );
};
