import React, { FC } from "react"
import { Poppins } from "next/font/google"
import classNames from "classnames"
import "@/design/globals.css"
import { Metadata, Viewport } from "next"
import Environment from "@/utilities/Environment"
import Dictate from "@/utilities/Dictionary"
import Header from "@/components/layout/Header"

const RootLayout: FC<ParentComponent> = ({
  children
}) => {
  return <html
    lang="en"
    className="text-lg"
  >
    <body className={classNames(
      "antialiased bg-fedora-100 text-fedora-900",
      "dark:bg-fedora-900 dark:text-fedora-100 mt-20",
      font.className
    )}>
      <Header />

      {children}
    </body>
  </html>
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export const generateMetadata = (): Metadata => {
  const dictionary = Dictate.en
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    abstract: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: Environment.HOST_URL,
      languages: {
        en: Environment.HOST_URL,
      }
    },
    applicationName: dictionary.metadata.author,
    authors: [{
      name: dictionary.metadata.author,
      url: Environment.HOST_URL
    }],
    category: dictionary.metadata.category,
    creator: dictionary.metadata.author,
    generator: dictionary.metadata.author,
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
    metadataBase: new URL(Environment.HOST_URL!),
    publisher: dictionary.metadata.author,
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
      creator: dictionary.metadata.twitter,
      site: dictionary.metadata.twitter,
      title: dictionary.metadata.author,
      description: dictionary.metadata.description,
      images: [{
        url: `${Environment.HOST_URL}/twitter-image`,
        width: 1200,
        height: 630,
        alt: dictionary.metadata.abstract
      }]
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: Environment.HOST_URL,
      title: dictionary.metadata.author,
      description: dictionary.metadata.description,
      images: [{
        url: `${Environment.HOST_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: dictionary.metadata.abstract
      }],
      siteName: dictionary.metadata.author,
      countryName: "Türkiye",
      emails: ["furkanbaytekin@gmail.com"]
    }
  }
}

export const viewport: Viewport = {
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "contain",
  interactiveWidget: "resizes-content"
}

export default RootLayout