import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/cn";
import Footer from "@/components/Footer";
import AOSanimate from "@/components/AOSanimate";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "px-[10vw] py-10 max-[1700px]:px-[5vw] max-[600px]:px-5",
        )}
      >
        <Header />
        <AOSanimate>{children}</AOSanimate>
        <Footer />
      </body>
    </html>
  );
}
