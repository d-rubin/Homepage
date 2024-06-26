import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daniel Rubin",
    template: "Daniel Rubin | %s",
  },
  description: "Next.js & React Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-20">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
