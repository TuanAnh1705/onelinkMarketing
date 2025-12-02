import React from "react";
import type { Metadata } from "next";
import "../css/globals.css";



export const metadata: Metadata = {
  title: "OneLink Marketing",
  description: "OneLink Marketing is your end-to-end partner, providing a comprehensive roadmap to solve your marketing challenges.",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="service-layout">
      {children}
    </section>
  );
}

