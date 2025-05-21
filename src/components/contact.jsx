"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Fade,
  Stack,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "background.default",
        py: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="h2" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 2 }} />
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
              Feel free to reach out for collaboration, inquiries, or just to say hello. I'll respond as soon as possible!
            </Typography>
          </Box>
        </Fade>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Fade in timeout={1200}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  bgcolor: "background.paper",
                  p: { xs: 3, sm: 4 },
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      py: 1.5,
                      px: 4,
                      alignSelf: { xs: "center", sm: "flex-start" },
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}