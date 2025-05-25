"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Grid,
  Fade,
} from "@mui/material";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Bootstrap" },
    ],
    backend: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "RESTful APIs" },
    ],
    tools: [
      { name: "Git/GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      
    ],
  };

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 16 },
        bgcolor: "background.default",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h2" color="text.primary" gutterBottom>
              My Skills
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "primary.main",
                mx: "auto",
                mb: 2,
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              I've developed a diverse set of skills throughout my journey as a
              web developer. Here's an overview of my technical expertise.
            </Typography>
          </Box>
        </Fade>

        {/* Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ bgcolor: "grey.100", borderRadius: 2, p: 1 }}
          >
            {["frontend", "backend", "tools"].map((tab) => (
              <Tab
                key={tab}
                label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                value={tab}
                sx={{
                  textTransform: "none",
                  fontWeight: "medium",
                  "&.Mui-selected": { color: "primary.main" },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Skills Grid */}
        <Fade in key={activeTab}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              container
              spacing={2}
              sx={{ maxWidth: 800 }}
              justifyContent="center"
            >
              {skillCategories[activeTab].map((skill) => (
                <Grid item xs={6} sm={4} key={skill.name}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: "center",
                      bgcolor: "#e3f2fd", // Light background
                      color: "primary.main",
                      border: 1,
                      borderColor: "primary.light",
                      transition: "all 0.3s",
                      "&:hover": {
                        bgcolor: "primary.light",
                        color: "primary.dark",
                      },
                    }}
                  >
                    <Typography variant="body2" fontWeight="medium">
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
