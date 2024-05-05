"use client";

import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";
import { Box } from "@mui/material";

const AutoPlaySwipeableViews  = autoPlay(SwipeableViews);

const imageArray = Array.from({ length: 76 }, (_, index) => `/events-photo/${index + 1}.png`);

export function ReactSwipeableViews() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <Box className="flex w-full items-center justify-between">
  <AutoPlaySwipeableViews
    index={index}
    onChangeIndex={handleChangeIndex}
    axis="x"
    enableMouseEvents
  >
    {imageArray.map((image, index) => (
      <Box key={index} className="rounded-3xl border">
        <Image
          src={image}
          alt={`Image ${index + 1}`}
          width={800}
          height={600}
          className="w-full rounded-3xl"
          priority
        />
      </Box>
    ))}
  </AutoPlaySwipeableViews>
</Box>
  );
}
