"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./navbar";
import FooterTwo from "./footerTwo";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar /> {children}
      <FooterTwo />
    </ThemeProvider>
  );
}

export default Layout;
