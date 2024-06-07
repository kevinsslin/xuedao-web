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
      <Box className="container mx-auto px-5 sm:px-32 md:px-32 lg:px-0">
        <Grid container rowSpacing={4} columnSpacing={10}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="border-4 border-black rounded-3xl">
              <Image
                src={"/hackathonInfo.png"}
                className="rounded-3xl"
                width={800}
                height={500}
                alt="HackathonInfo"
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="border-4 border-black rounded-3xl bg-white py-5 xl:px-8 h-full xl:w-5/6 justify-center items-center flex flex-col text-center">
              <Typography
                variant="h3"
                className="font-bold text-2xl xl:text-4xl"
              >
                XueDAO CONNECT
              </Typography>
              <Typography
                variant="h4"
                className="font-bold text-2xl xl:text-4xl"
              >
                Student-only Hackathon
              </Typography>
              <Typography className="xl:px-16 xl:py-5 xl:text-2xl px-2 py-2">
                Co-hosting with BuZhiDAO, we are delivering the very
                first student-only hackathon in Taiwan in May-June 2024!
              </Typography>
              <Link href={"https://www.moledao.io/#/event/3ae0e7d4-8ca4-43ca-9ac5-1afd47f97bfb"} className="p-5">
                <Button className="border-4 p-2 bg-xuedao_pink hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)] hover:bg-xuedao_yellow rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                  Register Hackathon now
                </Button>
              </Link>
              <Link href={"https://discord.gg/ZzFuAv9u3A"} className="p-5">
                <Button className="border-4 p-2 bg-xuedao_yellow hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)] hover:bg-xuedao_yellow rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                  Join Hackathon Discord now
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
