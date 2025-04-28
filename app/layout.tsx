import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Hind Tel | Heritage Ayurvedic Products Since 1933",
    template: "%s | Hind Tel - Heritage Ayurvedic Brand",
  },
  description:
    "Discover authentic Ayurvedic products from Hind Tel, a heritage brand by Hind Chemical Curative Works established in 1933. Traditional remedies crafted with ancient wisdom.",
  keywords: [
    "Ayurveda",
    "Ayurvedic products",
    "Hind Tel",
    "heritage brand",
    "traditional medicine",
    "natural remedies",
    "Hind Chemical Curative Works",
  ],
  authors: [{ name: "Hind Chemical Curative Works" }],
  creator: "Hind Chemical Curative Works",
  publisher: "Hind Chemical Curative Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hindtel.com",
    title: "Hind Tel | Heritage Ayurvedic Products Since 1933",
    description:
      "Authentic Ayurvedic products from a heritage brand established in 1933. Traditional remedies crafted with ancient wisdom.",
    siteName: "Hind Tel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hind Tel | Heritage Ayurvedic Products Since 1933",
    description:
      "Authentic Ayurvedic products from a heritage brand established in 1933. Traditional remedies crafted with ancient wisdom.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
