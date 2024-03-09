import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FirefliesBackground from "@/components/FirefliesBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
 });

export const metadata = {
  title: "Another Three.js Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground font-inter')}>
        {children}
        <FirefliesBackground />
      </body>
    </html>
  );
}
