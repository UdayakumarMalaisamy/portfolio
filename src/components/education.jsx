import {
  Box,
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
        width: "100vw",          // Full viewport width, no horizontal scroll
        py: { xs: 8, md: 16 },
        overflowX: "hidden",     // prevent horizontal scroll
      }}
    >
      <Fade in timeout={1000}>
        <Box textAlign="center" sx={{ mb: 8, maxWidth: 1200, mx: "auto", px: 2 }}>
          <Typography variant="h2" color="text.primary" gutterBottom>
            Education
          </Typography>
          <Box
            sx={{ width: 80, height: 4, bgcolor: "primary.main", mx: "auto", mb: 4 }}
          />
        </Box>
      </Fade>

      <Grid
        container
        spacing={4}
        sx={{
          width: "100vw",
          maxWidth: "100vw",
          mx: 0,
          px: 0,
        }}
      >
        {educationData.map((edu, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{
              width: "100vw",
              maxWidth: "100vw",
              px: 2,            // padding inside screen edges
              mx: 0,
            }}
          >
            <Fade in timeout={1000 + index * 200}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  width: "100%",    // full width of Grid item
                  boxSizing: "border-box",
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
    </Box>
  );
}
