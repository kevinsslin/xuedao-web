import React from "react";

import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import { Layout } from "@/components";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Xue DAO",
  description: "Xue DAO, a student-run DAO for students.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#3367D6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
