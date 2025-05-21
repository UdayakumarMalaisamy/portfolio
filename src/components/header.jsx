"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for AppBar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: scrolled ? "background.paper" : "transparent",
        boxShadow: scrolled ? 3 : 0,
        transition: "all 0.3s",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo/Name */}
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{ fontWeight: "bold", color: "text.primary", textDecoration: "none" }}
          >
            Udaya<span style={{ color: "#1976d2" }}>Kumar</span>
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.name}
                component="a"
                href={link.href}
                sx={{
                  color: "text.secondary",
                  fontWeight: "medium",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => setIsOpen(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.name}
                component="a"
                href={link.href}
                onClick={() => setIsOpen(false)}
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}