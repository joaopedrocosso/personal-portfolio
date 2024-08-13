import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "João Pedro Cosso",
  description: "Developer's personal website and portfolio @joaopedrocosso",
  icons: {
    icon: '/icons/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <div className="bg-[#011627] fixed top-0 -z-10 h-full w-full">
        </div>
      </body>
    </html>
  );
}
