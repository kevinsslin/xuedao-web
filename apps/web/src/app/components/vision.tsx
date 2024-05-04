import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { UniversityType } from "@/models/types/uiTypes";

const university: UniversityType[] = [
  { id: 1, name: "un1" },
  { id: 2, name: "un2" },
  { id: 3, name: "un3" },
  { id: 4, name: "un4" },
];

export function Vision() {
  return (
    <Box
      id="vision"
      className="w-full bg-gradient-to-b from-vision to-vision2 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      component="section"
    >
      <Box className="container mx-auto px-10 sm:flex-row sm:px-12 md:px-8 lg:px-10 xl:px-12">
        <Box className="flex flex-col space-y-4">
          <Box className="space-y-2 flex flex-col justify-start gap-10">
            <Typography className="text-3xl sm:h-32 text-center font-bold sm:py-9 sm:text-5xl md:text-4xl border-black border-4 border-solid rounded-full max-w-[300px] sm:max-w-[600px]">
              WHO is XUEDAO?
            </Typography>
            <Typography
              variant="body1"
              className="px-2 sm:px-5 max-w-[2000px] text-black text-xl md:text-2xl/relaxed lg:text-3xl/relaxed xl:text-3xl/relaxed"
            >
              XueDAO is the very first community in Taiwan focused on Student
              Developers led by Students!
            </Typography>
            <Box className="flex flex-row flex-wrap justify-center sm:justify-start gap-y-10">
              <Box className="w-full sm:w-auto sm:pl-4 sm:py-2 sm:flex sm:flex-col items-center sm:pr-32">
                <Box className="border-l-4 border-xuedao_blue pl-8">
                  <Typography variant="h3" className="text-xuedao_blue">
                    Vision
                  </Typography>
                  <Typography className="pl-2 max-w-[550px] text-black text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-3xl/relaxed">
                    Build a ultimate blockchain learning hub for students, and
                    show the world that Taiwanese Students Can BUILD!
                  </Typography>
                </Box>
              </Box>
              <Box className="w-full border-l-4 border-mission sm:w-auto sm:border-l-4 pl-8 sm:ml-4 sm:py-2">
                <Typography variant="h3" className="text-mission">
                  Mission
                </Typography>
                <Typography className="pl-2 max-w-[650px] text-black text-base md:text-lg/relaxed lg:text-xl/relaxed xl:text-3xl/relaxed">
                  Empower students by hosting Study Groups, Networking Events
                  and Hackathon to connect them with the industry and to the
                  world!
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className="px-2 sm:px-5 max-w-[2000px] text-black text-xl md:text-2xl/relaxed lg:text-3xl/relaxed xl:text-3xl/relaxed"
            >
              The Contributor Team of XueDAO is currently formed by students
              from 9 universities in Taiwan:
            </Typography>
            <Box className="sm:py-2 flex flex-col">
              <Box className="border-l-4 border-yellow-400 sm:w-auto sm:border-l-4 sm:pl-8 sm:ml-4 sm:py-2">
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {university.map((name, id) => (
                    <Grid item key={id} xs={8} sm={8} md={6} lg={6}>
                      <Image
                        src={`/${university[id].name}.png`}
                        alt={university[id].name}
                        width={1000}
                        height={400}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Image
                  src="/un5.png"
                  alt="NTUT"
                  width={350}
                  height={200}
                  className="ml-20 sm:ml-16 md:ml-20 lg:ml-0 w-24 h-auto sm:w-72"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="relative">
        <Box className="absolute bottom-0 right-0">
          <Image
            src="/vision_cloud.png"
            alt="cloud"
            width={300}
            height={300}
            className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 xl:w-56"
          />
        </Box>
      </Box>
    </Box>
  );
}
