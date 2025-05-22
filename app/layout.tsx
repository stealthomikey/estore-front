import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FooterTop from "@/components/FooterTop";

export const metadata: Metadata = {
  title: {
    template: "The Cat Lab | Kenzo x Michael",
    default: "The Cat Lab | Kenzo x Michael",
  },
  description: "Shopcat online store, by Kenzo x Michael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <div className="bg-gray-50/80">
          <FooterTop />
          </div>
        </div>
      </body>
    </html>
  );
}
