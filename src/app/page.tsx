"use client";

import Image from "next/image";
import Link from "next/link";

import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";

export default function Home() {
  const members = [
    "Jennifer",
    "Kevin",
    "Tim",
    "Albert",
    "Johnny",
    "Terrance",
    "Louis",
    "Moven",
    "Vincent",
    "HongRu",
    "Jourden",
    "Rita",
  ];

  return (
    <div>
      <section className="mt-4 w-full bg-blue-100 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="flex flex-col items-center justify-between gap-x-8 px-8 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-blue-900 sm:text-5xl xl:text-6xl/none">
              Welcome to XueDAO
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Our mission is to break down barriers, foster global connections
              among students, ignite a deep passion for learning, and promote a
              vibrant culture of knowledge sharing for both students and
              lifelong learners.
            </p>
            <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row sm:flex-row">
              <div className="flex flex-row gap-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="https://forms.gle/WAm4n1KiKeYksWj19"
                  target="_blank"
                >
                  Join Us
                </Link>
                <Link
                  className="disabled:opacity-500 inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("why-join");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:mt-0">
            <Image
              src="/logo-square.png"
              width={600}
              height={600}
              alt="XueDAO square logo"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold text-blue-900 sm:text-5xl"
                id="why-join"
              >
                Why Join XueDAO?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As a member of XueDAO, you'll have access to a wide range of
                resources and benefits designed to help you succeed in the world
                of Web3.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl md:text-4xl">
                      Education
                    </h3>
                    <p className="text-gray-500">
                      Access to educational resources and workshops on
                      blockchain and Web3 technologies.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl md:text-4xl">
                      Networking
                    </h3>
                    <p className="text-gray-500 ">
                      Connect with other students and professionals in the Web3
                      space.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold text-blue-900 sm:text-3xl md:text-4xl">
                      Governance
                    </h3>
                    <p className="text-gray-500">
                      Participate in the decision-making process of Xue DAO.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-blue-900 sm:text-5xl">
                Core Contributors
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              {members.map((name, index) => (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                  <Box textAlign="center" p={1}>
                    <Paper
                      elevation={4}
                      sx={{
                        p: 1,
                        borderRadius: "50%",
                        display: "inline-block",
                        mb: 2,
                      }}
                    >
                      <Avatar
                        alt={name}
                        src={`/core-contributors/${name}.png`}
                        sx={{ width: 144, height: 144 }}
                      />
                    </Paper>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "medium", color: "text.primary" }}
                    >
                      {name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
}
