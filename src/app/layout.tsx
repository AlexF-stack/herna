import type { ReactNode } from "react";
import type { Metadata } from "next";
import { brandAssets } from "@/content/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brandAssets.websiteUrl),
  applicationName: brandAssets.name,
  title: {
    default: `${brandAssets.name} — ${brandAssets.fullName}`,
    template: `%s · ${brandAssets.name}`,
  },
  description:
    "HERITAGE OF NATIONS (HERNA) is a pan-African investment holding based in Cotonou, Benin.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: brandAssets.name,
    title: `${brandAssets.name} — ${brandAssets.fullName}`,
    images: [
      {
        url: brandAssets.logoOpaqueSrc,
        width: 1536,
        height: 1024,
        alt: brandAssets.holdingName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: brandAssets.holdingName,
    images: [brandAssets.logoOpaqueSrc],
  },
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
          rel="preload"
          href="/media/preloader.webm"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href={brandAssets.logoSrc}
          as="image"
          type="image/png"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          id="herna-fonts"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&f[]=clash-display@400,500,600&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById('herna-fonts')?.addEventListener('load',function(){this.media='all'});`,
          }}
        />
        <noscript>
          <link
            href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&f[]=clash-display@400,500,600&f[]=general-sans@400,500,600&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Home-only instant shell before JS — SiteLoader removes it on mount */}
        <div
          id="herna-boot"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            padding: "2rem",
          }}
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.logoClearSrc}
            alt=""
            width={420}
            height={160}
            style={{
              width: "min(86vw, 26rem)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=location.pathname.replace(/\\/$/,'');if(!/^\\/(en|fr)$/.test(p)){var el=document.getElementById('herna-boot');if(el)el.remove();}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
