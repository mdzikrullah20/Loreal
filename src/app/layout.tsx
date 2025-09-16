import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

// Configure Mulish
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add weights you need
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "cproject",
  description: "Using Mulish globally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* apply Mulish to body */}
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
