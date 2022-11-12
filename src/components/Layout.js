import React from "react";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
  return (
    <div mb={16}>
      <Navbar />
      <div maxW="container.lg">{children}</div>
    </div>
  );
}
