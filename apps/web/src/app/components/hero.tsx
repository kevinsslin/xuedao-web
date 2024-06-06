import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <Box className="relative w-full overflow-hidden bg-gradient-to-b from-hero to-hero2 py-32 sm:py-20 md:py-24 lg:py-28 xl:py-20">
      <Box className="flex flex-col items-center justify-between gap-x-24 px-4 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <Box className="flex flex-col">
          <Image
            src="/XueDAO_logo.png"
            alt="xuedao logo"
            className="px-6 pt-4"
            width={800}
            height={400}
            priority
          />
          <Box className="flex flex-col items-center justify-center gap-4">
          <Typography
            variant="h3"
            className=" align-front text-black text-3xl sm:text-xl md:text-4xl lg:text-5xl pt-8 text-indent"
          >
            Show the world that <br/> Taiwanese Students <br/> can <span className="font-bold">BUIDL</span>
          </Typography>
          </Box>
          <Box className="ml-8 sm:ml-20 px-10 min-[600px] flex flex-col sm:w-48 sm:flex-row pt-12">
            <Link
              href="https://t.me/+0Rvawr400uNhNTY1"
              target="_blank"
              passHref
            >
              <Button
                variant="contained"
                className="inline-flex h-16 w-72 sm:w-96 items-center justify-center border-4 rounded-full hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)] hover:bg-white bg-white px-12 text-lg sm:text-lg font-bold text-black shadow focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Join NOW
              </Button>
            </Link>
          </Box>
        </Box>
        <Box className="absolute right-[20px] top-0 hidden sm:right-[-80px] md:right-[-100px] lg:right-[-120px] xl:right-[-150px] 2xl:right-[-70px] 2xl:block">
          <Image
            src="/puzzle.png"
            width={650}
            height={80}
            alt="puzzle"
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
