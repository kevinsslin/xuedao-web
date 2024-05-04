import React from "react";

import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import { MemberType } from "@/models/types/uiTypes";
import Link from "next/link";

export function Partner() {
  return (
    <Box className="flex w-full bg-gradient-to-b from-partner to-partner2 md:py-8 lg:py-12">
      <Box className="container flex flex-col mx-auto px-4 md:px-6">
        <Box className="items-center justify-center space-y-4 text-center text-3xl font-bold sm:text-6xl">
          We bridge students with the Industy
        </Box>
        <Box className="flex flex-col xl:flex-row justify-center items-center p-5 gap-5">
          <Image src="/partner1.png" width={600} height={300} alt="partner1" />
          <Image src="/partner2.png" width={600} height={300} alt="partner2" />
        </Box>
        <Box className="p-5 flex justify-center items-center">
          <Link
            href="https://opensea.io/collection/xuedao-core-contributor"
            target="_blank"
            title="Go to OpenSea!"
          >
            <Image
              src="/partner3.png"
              width={600}
              height={300}
              alt="partner3"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
