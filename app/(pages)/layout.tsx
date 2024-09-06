import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../utils/font";
import { montserrat } from "../utils/font";
// import { roboto } from './utils/font';

export const metadata: Metadata = {
  title: "leiaooi",
  description: "Sofware Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
