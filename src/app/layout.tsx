import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/providers/session-provider";
import NextUIProvider from "@/providers/next-ui-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <NextUIProvider>{children}</NextUIProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
