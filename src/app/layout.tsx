import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";

import Providers from "./providers";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Anshpreet Singh",
  description:
    "Explore the projects and professional experience of Anshpreet Singh, a full-stack developer specializing in Next.js, React, and Node.js.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={saira.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
