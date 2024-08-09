import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./utils/font";

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
      <body className={`${inter.className}antialiased`}>{children}</body>
    </html>
  );
}
