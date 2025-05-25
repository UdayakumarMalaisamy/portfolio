
import { Box, Container, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: 6, bgcolor: "grey.900", color: "grey.300" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ mb: 4 }}
        >
          {/* Left Section */}
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Udaya<span style={{ color: "#1976d2" }}>Kumar</span>
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300 }}>
              A passionate web developer focused on creating responsive and user-friendly web applications.
            </Typography>
          </Box>
          {/* Right Section */}
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} sx={{ mb: 2 }}>
              <Link href="https://www.linkedin.com/in/udayakumar0809?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="inherit" underline="hover">
                LinkedIn
              </Link>
              <Link href="/#https://github.com/UdayakumarMalaisamy" color="inherit" underline="hover">
                GitHub
              </Link>
             
            </Stack>
            <Typography variant="body2">
              &copy; {currentYear} Udayakumar M. All rights reserved.
            </Typography>
          </Box>
        </Stack>
        {/* Bottom Text */}
        <Box textAlign="center">
          
        </Box>
      </Container>
    </Box>
  );
}