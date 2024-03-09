import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container-fluid bg-light ${inter.className}`}>
        <div className="row py-3 border-bottom bg-white">
          <div className="col-12 ">
            <Link href={"/"} className="text-decoration-none text-dark">
              {"<"} Home Page
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
