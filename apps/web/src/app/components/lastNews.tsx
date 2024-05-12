import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";

const instagramPosts = [
  "https://www.instagram.com/p/C63ovPzykM4",
  "https://www.instagram.com/p/C61NAC4roZ9",
  "https://www.instagram.com/p/C6v6V9zNyym",
];

export function LastNews() {
  useEffect(() => {
    // Create the script tag for Instagram embed
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box className="flex w-full bg-gradient-to-b from-lastnews to-lastnews2 md:py-8 lg:py-12">
      <Box className="container flex flex-col mx-auto px-4 md:px-6">
        <Box className="items-center justify-center space-y-4 text-center">
          <Typography variant="h3">Last News</Typography>
        </Box>
        <Box className="gap-5 py-5 px-5">
            <Grid container spacing={2}>
                {instagramPosts.map((postUrl, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink={postUrl}
                            data-instgrm-version="14"
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default LastNews;
