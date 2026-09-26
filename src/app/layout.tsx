import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "Fit-Log",
  description: "Workout library and workout planning application",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          {children}
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
