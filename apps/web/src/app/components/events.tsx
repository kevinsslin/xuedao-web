import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { ReactSwipeableViews } from "@/components/swiperbox";
import Link from "next/link";

export function Events() {
  return (
    <Box
      className="w-full bg-gradient-to-b from-event to-event2 py-12 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-2"
      component="section"
    >
      <Image
        src="/events_header.png"
        width={700}
        height={300}
        alt="events header"
        className="items-center justify-center xl:ml-16"
      />
      <Grid container spacing={6}>
        {/* Column 1: 50% width */}
        <Grid item xs={12} md={6}>
          <ReactSwipeableViews />
        </Grid>
        {/* Column 2: 50% width */}
        <Grid item xs={12} md={6} className="gap-y-10">
          {/* Row 1: 25% height */}
          <Grid
            container
            item
            xs={12}
            md={6}
            style={{ height: "25%" }}
            className="flex xl:flex-col"
          >
            <Typography variant="h5" className="font-bold" align="left">
              We Hack!
            </Typography>
            <Typography className="max-w-[550px] text-black" align="left">
              We join hackathons together and win several prizes already
            </Typography>
          </Grid>
          {/* Row 2: 25% height */}
          <Grid
            container
            item
            xs={12}
            style={{ height: "25%" }}
            className="flex xl:flex-col"
          >
            <Typography variant="h5" className="font-bold" align="left">
              We Learn!
            </Typography>
            <Typography className="max-w-[550px] text-black" align="left">
              we host bi-weekly co-learning day which is open for everyone to
              join, also the study groups
            </Typography>
          </Grid>
          {/* Row 3: 25% height */}
          <Grid
            container
            item
            xs={12}
            style={{ height: "25%" }}
            className="flex xl:flex-col pt-5"
          >
            <Typography variant="h5" className="font-bold" align="left">
              We Connect!
            </Typography>
            <Typography className="max-w-[550px] text-black" align="left">
              We host side event during ETH Taipei, and Keynotes Speechs with
              professions from the industry
            </Typography>
          </Grid>
          {/* Row 4: 25% height */}
          <Grid
            container
            item
            xs={12}
            style={{ height: "25%" }}
            className="pt-10"
          >
            <Link href={"https://edux-taipei.com/"}>
              <Button className="border-4 bg-xuedao_blue hover:shadow-[-18px_25px_14px_-10px_rgba(204,204,204,0.82)]  hover:bg-xuedao_blue rounded-xl p-1 text-xs md:text-sm lg:text-base xl:text-lg text-black font-bold h-10 xl:h-12">
                EduX Conference Official Website
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Image
          src="/events.png"
          width={1700}
          height={300}
          alt="123"
          className="mx-auto"
        />
      </Grid>
    </Box>
  );
}
