import React from "react";

export type MemberType = {
  id: number;
  name: string;
  subtitle: string;
  type: string;
};

export type UniversityType = {
  id: number;
  name: string;
};

export type ImageType = {
  index: number;
  imgPath: string;
  label: string;
};

export type NavbarItemType = {
  name: string;
  href: string;
  target: string;
};
