import { Container, Button, Stack, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h4">It works</Typography>
        <Button variant="contained">Click me</Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
