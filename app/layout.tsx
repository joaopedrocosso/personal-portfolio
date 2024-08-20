import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
        <div className="bg-blue-3 fixed top-0 -z-10 h-full w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
