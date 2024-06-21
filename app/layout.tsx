
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
        </html>
    </SessionWrapper>

  );
}
