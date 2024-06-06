import React from "react";

import { Typography, Box } from "@mui/material";

export function Footer() {
  return (
    <Box className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t bg-white px-4 py-6 sm:flex-row md:px-6">
      <Typography variant="body1" color="text.secondary">
        © 2024 XueDAO foundation. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
