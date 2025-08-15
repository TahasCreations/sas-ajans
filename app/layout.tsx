import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAS Ajans - Yaratıcı Promosyon ve Tasarım Hizmetleri",
  description: "SAS Ajans ile markanızı güçlendirin. Promosyon ürünleri, UV baskı, lazer kesim, kartvizit tasarımı ve daha fazlası.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}