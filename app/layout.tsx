import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { ThemeProvider } from "next-themes";



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
  icons:{
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${roboto.className} antialiased transition-colors duration-500 ease-in-out`}
      >

        <ThemeProvider 
        attribute="class"
        defaultTheme="system" 
        enableSystem
        >


            <Navbar />

            {children}
        </ThemeProvider>


      </body>
    </html>
  );
}
