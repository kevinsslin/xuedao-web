import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";

const instagramPosts = [
  "https://www.instagram.com/p/C71WI0Yy5Sg",
  "https://www.instagram.com/p/C7wVuSCS3Rb",
  "https://www.instagram.com/p/C7l9OAoyeSo",
];

export function LastNews() {
  const [loading, setLoading] = useState(true);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadInstagramScript = () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      script.onload = () => {
        setLoading(false);
        setScriptLoaded(true);
      };

      document.body.appendChild(script);
      scriptRef.current = script;
    };

    loadInstagramScript();

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!loading && scriptLoaded) {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }
  }, [loading, scriptLoaded]);

  return (
    <Box className="flex w-full bg-gradient-to-b from-lastnews to-lastnews2 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <Box className="container flex flex-col mx-auto px-4 md:px-6">
        <Box className="items-center justify-center space-y-4 text-center mb-4">
          <Typography variant="h3">
            Last News
          </Typography>
        </Box>
        {loading ? (
          <Box className="flex justify-center items-center h-[50vh]">
            <CircularProgress />
          </Box>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {instagramPosts.map((postUrl, index) => (
              <div key={index} className="flex justify-center items-center">
                <blockquote
                  className="instagram-media w-full max-w-xs md:max-w-sm lg:max-w-md"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{ margin: 'auto' }}
                />
              </div>
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
}

export default LastNews;
