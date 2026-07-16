import React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css"
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/Themeprovider";


const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "ShadcnDashboard - Tailwind + Shadcn Nextjs",
  description: "Modern admin dashboard built with Next.js, Tailwind, and Shadcn.",
   openGraph: {
    title: "ShadcnDashboard - Tailwind + Shadcn Nextjs",
    description: "Modern admin dashboard built with Next.js, Tailwind, and Shadcn.",
    images: [
      {
        url: "/OG-Image.png",
        width: 1200,
        height: 630,
        alt: "ShadcnDashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OG-Image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" suppressHydrationWarning
      data-color-theme="CUSTOM_THEME"
      data-layout="vertical"
      data-boxed-layout="boxed"
      data-sidebar-type="false"
      data-card-shadow="false"
      className="style-lyra"
    >
      <head>
        <link rel="icon" href="/favicons.ico" type="image/svg+xml" />
      </head>
      <body className={`${geist.className} `} >
        <NextTopLoader color="var(--primary)" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>

  );
}
