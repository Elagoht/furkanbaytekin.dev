import Schema from "@/components/analytics/Schema"
import Aside from "@/components/layout/Aside"
import "@/design/globals.css"
import Blueprint from "@/utility/Blueprint"
import classNames from "classnames"
import { Metadata } from "next"
import { DM_Sans as DMSans } from "next/font/google"
import { FC } from "react"

const RootLayout: FC<ParentComponent> = ({
  children
}) =>
  <html lang="en">
    <body className={classNames(
      "antialiased bg-neutral-100 dark:bg-neutral-800",
      "text-neutral-900 dark:text-neutral-100 h-screen p-4",
      font.className
    )}>
      <div role="presentation">
        <Aside />

        <main className="bg-neutral-50 dark:bg-neutral-900 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </body>

    <Schema schema={Blueprint.ofMe()} />
  </html>

const font = DMSans({
  weight: ["400", "500", "600"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Furkan Baytekin",
  description: "Furkan Baytekin's corner on the web. A place to share my thoughts and experiences, If you care.",
  abstract: "Furkan Baytekin's web book",
  keywords: ["furkan", "baytekin", "web", "book", "blog", "portfolio", "developer", "programmer", "programming", "musician", "music", "bass guitarist", "music recommendation", "frontend", "backend", "fullstack", "software", "web development"],
  alternates: {
    canonical: process.env.HOST_URL,
    languages: {
      en: process.env.HOST_URL,
    }
  },
  applicationName: "Furkan Baytekin",
  authors: [{
    name: "Furkan Baytekin",
    url: process.env.HOST_URL
  }],
  category: "personal blog",
  creator: "Furkan Baytekin",
  generator: "Furkan Baytekin",
  icons: [{
    url: "/favicon.ico",
    sizes: "32x32",
    type: "image/x-icon"
  }, {
    url: "/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png"
  }, {
    url: "/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png"
  }, {
    url: "/apple-touch-icon.png",
    sizes: "180x180",
    type: "image/png"
  }, {
    url: "/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png"
  },
  {
    url: "/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png"
  }],
  manifest: "/site.webmanifest",
  metadataBase: new URL(process.env.HOST_URL!),
  publisher: "Furkan Baytekin",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  twitter: {
    card: "summary",
    creator: "@furkanbytekin",
    site: "@furkanbytekin",
    title: "Furkan Baytekin",
    creatorId: "furkanbytekin",
    siteId: "furkanbytekin",
    description: "Furkan Baytekin's corner on the web. A place to share my thoughts and experiences, If you care.",
    images: [{
      url: `${process.env.HOST_URL}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: "Furkan Baytekin's corner on the web. A place to share my thoughts and experiences, If you care."
    }]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.HOST_URL,
    title: "Furkan Baytekin",
    description: "Furkan Baytekin's corner on the web. A place to share my thoughts and experiences, If you care.",
    images: [{
      url: `${process.env.HOST_URL}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: "Furkan Baytekin's corner on the web. A place to share my thoughts and experiences, If you care."
    }],
    siteName: "Furkan Baytekin",
    countryName: "Türkiye",
    emails: ["furkanbaytekin@gmail.com"]
  }
}

export default RootLayout