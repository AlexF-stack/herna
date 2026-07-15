import type { ReactNode } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { brandAssets } from "@/content/brand";
import { defaultLocale, isLocale } from "@/i18n/config";
import { ogImage } from "@/lib/seo";
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
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: brandAssets.holdingName,
    images: [ogImage.url],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerList = await headers();
  const raw = headerList.get("x-herna-locale");
  const lang = raw && isLocale(raw) ? raw : defaultLocale;

  return (
    <html
      suppressHydrationWarning
      lang={lang}
      className="light"
      data-theme="light"
    >
      <head>
        <link
          rel="preload"
          href="/media/preloader.webm"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href={brandAssets.logoOpaqueSrc}
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
            pointerEvents: "none",
          }}
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.logoOpaqueSrc}
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
            __html: `(function(){var el=document.getElementById('herna-boot');if(!el)return;setTimeout(function(){el&&el.remove();},1600);})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
