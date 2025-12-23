import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})
const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mario Portfolio",
  description: "Mario Info Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
