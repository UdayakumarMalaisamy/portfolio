"use client";

import { useEffect, useState } from "react";
import { ArrowDownward, GitHub, LinkedIn, Email, LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Fade,
  IconButton,
  Stack,
} from "@mui/material";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer";
  const [index, setIndex] = useState(0);

  // Typewriter effect for "Web Developer"
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        py: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography color="primary" fontWeight="medium" gutterBottom>
                  Hello, I'm
                </Typography>
                <Typography variant="h1" color="text.primary" gutterBottom>
                  Udayakumar M
                </Typography>
                <Typography variant="h2" color="text.secondary" sx={{ minHeight: 40 }}>
                  {text}
                  <span className="animate-pulse">|</span>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, my: 4 }}>
                  Motivated and detail-oriented web developer with a strong foundation in React.js and Node.js, seeking to
                  build responsive web applications and contribute to real-world projects.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                  {/* <Button variant="contained" href="#contact" size="large" sx={{ px: 4 }}>
                    Contact Me
                  </Button> */}
                  <Button variant="outlined" href="#projects" size="large" sx={{ px: 4 }}>
                    View Projects
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton
                    href="https://www.linkedin.com/in/udayakumar0809?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href=" https://github.com/UdayakumarMalaisamy
"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton href="mailto:udayakumarmalaisamy@gmail.com" color="inherit">
                    <Email />
                  </IconButton>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOn fontSize="small" color="inherit" />
                    <Typography variant="body2" color="text.secondary">
                      Theni, India
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Fade>
          </Grid>
          {/* Avatar */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Fade in timeout={1500}>
              <Avatar
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  bgcolor: "primary.main",
                  fontSize: { xs: 80, md: 120 },
                  fontWeight: "bold",
                  border: 4,
                  borderColor: "primary.dark",
                  boxShadow: 3,
                }}
              >
                UM
              </Avatar>
            </Fade>
          </Grid>
        </Grid>
        {/* Scroll Down Button */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "block" },
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translate(-50%, 0)" },
              "40%": { transform: "translate(-50%, -10px)" },
              "60%": { transform: "translate(-50%, -5px)" },
            },
          }}
        >
          <IconButton href="#about" color="primary">
            <ArrowDownward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}