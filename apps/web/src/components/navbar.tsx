"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";

import * as DiscordIcon from "../../public/icons-discord.svg";
import {
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  X as XIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
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
  ListItemText,
  Box,
} from "@mui/material";

import { NavbarItemType } from "@/models/types/uiTypes";

const NAV_MENU: NavbarItemType[] = [
  {
    name: "Events",
    href: "https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH",
    target: "_blank",
  },
  {
    name: "Telegram",
    href: "https://t.me/+0Rvawr400uNhNTY1",
    target: "_blank",
  },
  {
    name: "Discord",
    href: "https://discord.gg/ZzFuAv9u3A",
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
      <Toolbar className="flex justify-between items-center">
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2, ml: 2 }}
        >
          <Link href="/">
            <Image
              src="/XD_logo.png"
              alt="Xue DAO logo"
              width={70}
              height={100}
              style={{ width: "100px", height: "auto" }}
              priority
            />
          </Link>
        </Typography>

        {/* Collapse */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: 2,
            alignItems: "center",
            justifyItems: "center",
            flexGrow: 1,
          }}
        >
          {NAV_MENU.map(({ name, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Button
                color="inherit"
                className="rounded-full font-bold text-md"
              >
                {name}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/xue_dao_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/xuedao_tw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100094540248529"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/xuedao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <Link
            href="https://www.moledao.io/#/event/3ae0e7d4-8ca4-43ca-9ac5-1afd47f97bfb"
            target="_blank"
            passHref
            className="ml-4"
          >
            <Button color="inherit" variant="outlined" className="rounded-full">
              CONNECT Hackathon
            </Button>
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
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

      {/* Collapse */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav">
          {NAV_MENU.map(({ name, href, target }) => (
            <Link key={name} href={href} target={target} passHref>
              <Box sx={{ display: "block", textAlign: "left", pt: 1 }}>
                <ListItem onClick={handleOpen}>
                  <ListItemText primary={name} />
                </ListItem>
              </Box>
            </Link>
          ))}
          <ListItem>
            <IconButton
              component="a"
              href="https://www.instagram.com/xue_dao_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/xuedao_tw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://t.me/+0Rvawr400uNhNTY1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://discord.gg/G2V7G7FN"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={DiscordIcon}
                alt="dicord"
                width={24}
                height={24}
                style={{ filter: "grayscale(100%)" }}
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=100094540248529"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/xuedao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.moledao.io/#/event/3ae0e7d4-8ca4-43ca-9ac5-1afd47f97bfb"
              target="_blank"
              passHref
            >
              <Button
                color="inherit"
                variant="outlined"
                className="rounded-full"
              >
                CONNECT Hackathon
              </Button>
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;
