import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function HackathonInfo() {
  return (
    <Box
      className="w-full bg-gradient-to-b from-hackathon to-hackathon2 py-32 sm:py-48 md:py-52 lg:py-56 xl:py-64"
      component="section"
    >
      <Box className="container mx-auto px-10">
        <Grid container rowSpacing={4} columnSpacing={10}>
          <Grid item xs={12} sm={6}>
            <Image
              src={"/hackathonInfo.png"}
              className="rounded-3xl"
              width={800}
              height={500}
              alt="HackathonInfo"
              priority
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="border-4 border-black rounded-3xl bg-white py-5 xl:px-8 h-full justify-center items-center flex flex-col">
              <Typography variant="h3" className="font-bold text-2xl xl:text-4xl">XueDAO CONNECT</Typography>
              <Typography variant="h4" className="font-bold text-2xl xl:text-4xl">Student-only Hackathon</Typography>
              <Typography className="xl:px-16 xl:py-10 xl:text-2xl px-2 py-2">Co-hosting with EduX and BuZhiDAO, we are delivering the very first student-only hackathon in Taiwan in May-July 2024!</Typography>
              <Link href={"https://discord.gg/G2V7G7FN"} className="p-5">
                <Button className="border-4 bg-xuedao_yellow hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)] hover:bg-xuedao_yellow rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                  Join our Hackathon Discord now!
                </Button>
              </Link>
              <Link href={"https://edux-taipei.com/"}>
                <Button className="border-4 bg-xuedao_blue hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)] hover:bg-xuedao_blue rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                  EduX Conference Official Website
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
