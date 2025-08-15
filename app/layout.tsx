import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}