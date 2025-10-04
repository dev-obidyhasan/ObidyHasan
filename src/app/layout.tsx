import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obidy Hasan Naim | Full-Stack Developer",
  description: `Full-Stack Developer specializing in the MERN stack with expertise in Next.js. Skilled in developing
 e-commerce, logistics, and real estate platforms that improve efficiency and user experience.
 Adept at problem-solving, with 200+ algorithmic challenges solved on Codeforces and LeetCode.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
