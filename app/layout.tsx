import { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import ConvexClerkProvider from "./providers/ConvexClerkProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PodcastOn",
  description: "Generated your podcast using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClerkProvider>
          {children}
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
