import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import Provider from '@/providers';
import Head from 'next/head';
import "@rainbow-me/rainbowkit/styles.css";
import "aos/dist/aos.css";
import "./globals.css";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

const catFont = localFont({
  src: [
    {
      path: "../../public/fonts/Catfiles.woff",
    },
  ],
  variable: "--font-cat",
});

export const metadata: Metadata = {
  title: "Mars WTF",
  description: "BASE memecoin",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${catFont.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body suppressHydrationWarning={true}>
          <Provider>
            {children}
          </Provider>
      </body>
    </html>
  );
}
