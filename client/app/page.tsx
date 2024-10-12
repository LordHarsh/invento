import { Boxes } from "@/components/ui/background-boxes";

// app/page.tsx
export default function Home() {
  return (
    <main className="relative flex justify-center items-center h-screen">
      {/* Background boxes component */}
      <Boxes className="absolute inset-0 -z-10" />
      
      {/* Main content */}
      <section className="flex items-center container mx-auto p-8 relative z-20 bg-transparent">
        {/* Left side: Heading and CTA */}
        <div className="w-1/2">
          <h1 className="text-6xl font-bold leading-tight text-black">
          Building Digital Solutions with Creativity & Code
          </h1>
          <p className="mt-6 text-lg text-white">
            Take your .Dynamic Web Magic with Next.js to the next level with our
          </p>
          <a href="/builder">
            <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg">
              Get started
            </button>
          </a>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/hero.png"
            alt="Unleash Your Full Potential"
            className="w-3/4 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
