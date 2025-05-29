import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dana Gutu - Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  );
}
