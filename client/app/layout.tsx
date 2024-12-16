import Footer from '@/components/Home/Footer/Footer';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import { Poppins } from 'next/font/google';
import "./globals.css";

const font = Poppins({
  weight:['100','300','400','500','700','900','200','600','800'],
  subsets:['latin']
})
export const metadata = {
  title: "FlowCV",
  description: "Unleash Your Full Potential with AI-powered resume builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
      className={`${font.className} antialiased`} >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
