import type { ReactNode } from "react";
import type { Metadata } from "next";
import { brandAssets } from "@/content/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brandAssets.websiteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="light" data-theme="light">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&f[]=clash-display@400,500,600&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
