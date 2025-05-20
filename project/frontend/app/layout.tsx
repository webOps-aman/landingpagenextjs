import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import {Poppins} from "next/font/google"
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "App Landing | Next 15",
  description: "App landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Responsive/>
        {children}
      </body>
    </html>
  );
}
