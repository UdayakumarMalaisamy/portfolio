import { Box, Container, Grid, Typography, Fade, Paper } from "@mui/material";

export default function About() {
  const features = [
    {
      icon: null,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      icon: null,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express.js, and MongoDB.",
    },
    {
      icon: null,
      title: "MERN Stack",
      description: "Full-stack development using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      icon: null,
      title: "Team Collaboration",
      description: "Working effectively in team environments using Git, GitHub, and agile methodologies.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "background.default",
        py: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Typography
            variant="h2"
            color="text.primary"
            align="center"
            gutterBottom
            sx={{ mb: 8 }}
          >
            About Me
          </Typography>
        </Fade>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  {feature.icon && (
                    <Box sx={{ mb: 2, color: "primary.main" }}>{feature.icon}</Box>
                  )}
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}