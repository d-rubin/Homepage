import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Daniel Rubin",
    template: "Daniel Rubin | %s",
  },
  description: "Next.js & React Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
