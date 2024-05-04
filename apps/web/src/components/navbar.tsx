"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Web as WebIcon,
  AccountCircle as AccountCircleIcon,
  Code as CodeIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  Book as BookIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import { NavbarItemType } from "@/models/types/uiTypes";

const NAV_MENU: NavbarItemType[] = [
  {
    name: "Home",
    icon: <WebIcon />,
    href: "/",
    target: "",
  },
  {
    name: "Events",
    icon: <AccountCircleIcon />,
    href: "https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH",
    target: "_blank",
  },
  {
    name: "Medium",
    icon: <BookIcon />,
    href: "https://medium.com/xuedao",
    target: "_blank",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1),
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      className="bg-white"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Image
              src="/XD_logo.png"
              alt="Xue DAO logo"
              width={100}
              height={100}
              style={{ width: "100px", height: "auto" }}
              priority
            />
          </Link>
        </Typography>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: 2,
            alignItems: "center",
            pt: 2,
          }}
        >
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Button color="inherit" startIcon={Icon} className="rounded-full">
                {name}
              </Button>
            </Link>
          ))}
        </Box>
        <div style={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Link
            href="https://forms.gle/WAm4n1KiKeYksWj19"
            target="_blank"
            passHref
          >
            <Button
              color="inherit"
              variant="outlined"
              endIcon={<AccountCircleIcon />}
              className="rounded-full"
            >
              Join Us
            </Button>
          </Link>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpen}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav">
          {NAV_MENU.map(({ name, icon: Icon, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Box sx={{ display: "block", textAlign: "left", pt: 1 }}>
                <ListItem onClick={handleOpen}>
                  <ListItemIcon>{Icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </Box>
            </Link>
          ))}
          <ListItem>
            <Link
              href="https://forms.gle/WAm4n1KiKeYksWj19"
              target="_blank"
              passHref
            >
              <Button
                color="inherit"
                variant="outlined"
                endIcon={<AccountCircleIcon />}
              >
                Join Us
              </Button>
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;
