import "./globals.css";
import { Tagesschrift } from "next/font/google";

const tagesschrift = Tagesschrift({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tagesschrift",
});

export const metadata = {
  title: "Homemade Indian Snacks",
  description: "Authentic homemade Indian snacks crafted with tradition and care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={tagesschrift.variable}>
      <body className="bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
