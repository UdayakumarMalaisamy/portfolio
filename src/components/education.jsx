// import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Fade,
  Paper,
} from "@mui/material";

export default function Education() {
  const educationData = [
    {
      institution: "ZHAHI TECH TRAINING",
      degree: "MERN Stack Development",
      period: "2024-2025",
      description:
        "Comprehensive training in MongoDB, Express.js, React.js, and Node.js for full-stack web development.",
    },
    {
      institution: "GOVT ARTS AND SCIENCE COLLEGE VEERAPANDI",
      degree: "Bachelor of Computer Science",
      period: "2022-2025",
      description:
        "Studied core computer science concepts, programming fundamentals, and software development principles.",
    },
    {
      institution: "GOVT HIGHER SECONDARY SCHOOL KUMANANTHZHU",
      degree: "Computer Science",
      period: "2021-2022",
      description: "Focused on computer science fundamentals and basic programming concepts.",
    },
  ];

  return (
    <Box
      id="education"
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
            Education
          </Typography>
        </Fade>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" gutterBottom>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {edu.period}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {edu.description}
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