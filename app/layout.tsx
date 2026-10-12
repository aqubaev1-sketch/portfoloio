import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import VisitorTracker from "@/components/VisitorTracker";
import { SITE_URL } from "@/lib/siteConfig";

const instrumentSerifHeading = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400"],
});

const siteConfig = {
  name: "Aisultan",
  title: "Aisultan | Full Stack Engineer",
  description:
    "A Full Stack Developer building modern web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, and WebSockets. Explore my projects, technical blogs, and open-source work.",
  url: SITE_URL,
  image: "/og-hero.jpg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  alternates: {
    canonical: "/"
  },

  title: {
    default: siteConfig.title,
    template: "%s | Aman Verma",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Aman Verma",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Projects",
    "Technical Blogs",
    "Web Developer",
  ],

  authors: [{ name: "Aman Verma" }],
  creator: "Aman Verma",
  publisher: "Aman Verma",

  category: "Technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Aman Verma",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Aman Verma Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: "@amannv",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        instrumentSerifHeading.variable,
        IBMPlexMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col items-center overflow-x-clip">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VisitorTracker />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
