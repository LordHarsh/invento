import { Boxes } from "@/components/ui/background-boxes";
// import { cn } from "@/lib/utils";
import Image from "next/image";
// app/page.tsx
export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <section className="flex items-center container mx-auto p-8 relative z-20 bg-transparent">
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

        <div className="w-1/2 flex justify-center">
          <Image
            height={600}
            width={600}
            src="/hero.png"
            alt="Unleash Your Full Potential"
            className="w-3/4 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
