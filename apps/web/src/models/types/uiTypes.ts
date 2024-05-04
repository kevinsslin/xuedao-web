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
  icon: React.ReactElement;
  href: string;
  target: string;
};
