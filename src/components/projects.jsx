"use client";

import { useState } from "react";
import {
  Smartphone,
  ShoppingCart,
  Restaurant,
  Agriculture,
  GitHub,
  Launch,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Fade,
} from "@mui/material";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "i Mobiles",
      description:
        "A web-based application designed to streamline the sales, inventory, and customer management of a mobile store. Built with Bootstrap, it provides a responsive and user-friendly interface for efficient store operations.",
      tags: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      icon: <Smartphone sx={{ fontSize: 40, color: "primary.main" }} />,
      link: "/#",
      github: "/#",
    },
    {
      title: "Custom Portrait E-Commerce Platform",
      description:
        "Worked on the User Module of the Custom Portrait E-Commerce Platform. My role involved building features like user registration, login, profile management, and order tracking. Used React for the frontend and Node.js with MongoDB for the backend.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      icon: <ShoppingCart sx={{ fontSize: 40, color: "primary.main" }} />,
      link: "/#",
      github: "/#",
    },
    {
      title: "Food Panda Website",
      description:
        "Developed a static Foodpanda website mockup using HTML and CSS, focusing on layout and design. Showcased core pages like restaurant listings and a clean ordering interface.",
      tags: ["HTML", "CSS", "Responsive Design"],
      icon: <Restaurant sx={{ fontSize: 40, color: "primary.main" }} />,
      link: "https://github.com/UdayakumarMalaisamy/Foodpanda-mokeup-",
      github: "/#",
    },
    {
      title: "Dairy Farm Management",
      description:
        "Experienced in dairy farm management, handling daily tasks like animal care, milk production, and farm operations. Also skilled in MERN Stack development to create web applications for farm management, data tracking, and automation.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      icon: <Agriculture sx={{ fontSize: 40, color: "primary.main" }} />,
      link: "/#",
      github: "/#",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{ py: { xs: 8, md: 16 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" color="text.primary" gutterBottom>
            My Projects
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Here are some of the projects I've worked on. Each project has helped me develop different skills and
            overcome unique challenges.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Fade in timeout={500 + index * 200}>
                <Card
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    transition: "transform 0.3s, boxShadow 0.3s",
                    transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      height: 4,
                      bgcolor: "primary.main",
                      transition: "width 0.3s",
                      width: hoveredIndex === index ? "100%" : "33%",
                    }}
                  />
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Box sx={{ p: 1, bgcolor: "primary.light", borderRadius: "50%" }}>
                        {project.icon}
                      </Box>
                      <Typography variant="h6" color="text.primary">
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ "&:hover": { bgcolor: "primary.light" } }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between", p: 2, borderTop: 1, borderColor: "divider" }}>
                    <Button
                      variant="outlined"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub />}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Launch />}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}