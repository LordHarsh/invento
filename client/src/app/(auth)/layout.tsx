"use client";
import Footer from '@/components/global/footer';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import "@/app/globals.css";
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroHighlight>


      <div className="w-screen sticky top-0 z-50 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm">
        <ResponsiveNav />
      </div>
      <main className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [100, -50, 25, -10, 0],
          }}
          transition={{
            duration: 1.5,
          }}
          className=""
        >

          {children}
        </motion.div>
      </main>
      <Footer />
    </HeroHighlight>
  );
}