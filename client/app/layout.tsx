// app/layout.tsx
import NavBar from '../components/Navbar'; // Make sure the import path is correct
import './globals.css';

export const metadata = {
  title: 'FlowCV',
  description: 'Unleash Your Full Potential with AI-powered resume builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-[#132058] to-[#132058] text-gray-900">
        <header className="bg-[#132058] text-gray-900 shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Invento</div>
            <NavBar /> {/* Use the NavBar component */}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
