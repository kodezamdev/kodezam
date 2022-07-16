import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
