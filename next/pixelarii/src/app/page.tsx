import { Container, Stack, Typography } from "@mui/material";
import { getArticles } from "@/model/article";
import { getLikes } from "@/server/likes";
import { LikeButton } from "@/components/LikeButton";

const HomePage = async () => {
  const articles = await getArticles();
  const likes = await getLikes();

  return (
    <Container>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {articles.map((article) => (
          <Stack key={article.slug} spacing={1}>
            <Typography>
              {article.title}
            </Typography>

            <LikeButton
              slug={article.slug}
              initialLikes={likes[article.slug] ?? 0}
            />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;