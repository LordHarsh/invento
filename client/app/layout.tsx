import NavBar from "../components/Navbar";
import "./globals.css";

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
      <body className="bg-gradient-to-b from-black via-[#132058] to-[#132058] text-gray-900">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
