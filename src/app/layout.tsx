 
import Navbar from "../app/components/Navbar/page"

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "../app/components/Footer/page"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zodha reseach",
  description: "Developed by team dotco",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Navbar />
        
     

        {children}
        <Footer />
      </body>
    </html>
  );
}
