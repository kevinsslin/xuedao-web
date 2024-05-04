import React from "react";

import { Box, Typography } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import ReplayIcon from '@mui/icons-material/Replay';
import LockIcon from '@mui/icons-material/Lock';
import Image from "next/image";
import Link from "next/link";

export function LastNews() {
  return (
    <Box className="flex w-full bg-gradient-to-b from-lastnews to-lastnews2 md:py-8 lg:py-12">
      <Box className="container flex flex-col mx-auto px-4 md:px-6">
        <Box className="items-center justify-center space-y-4 text-center">
          <Typography variant="h3">Last News</Typography>
        </Box>
        <Box className="flex flex-col xl:flex-row justify-center items-center p-5 gap-5 px-auto">
          <Image src="/news1.png" width={400} height={400} alt="news1"/>
          <Image src="/news2.png" width={400} height={400} alt="news2"/>
          <Image src="/news3.png" width={400} height={400} alt="news3"/>
        </Box>
      </Box>
    </Box>
  );
}
