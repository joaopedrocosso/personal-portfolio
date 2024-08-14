import { ScrollProvider } from "@/providers/ScrollProvider";
import Portfolio from "@/sections/Portfolio";
import SideProfile from "@/sections/SideProfile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-32 antialiased flex-row justify-center">
      <ScrollProvider>
        <main className="flex gap-32 antialiased flex-row justify-center">
          <section className='sticky top-0 h-screen flex items-center pb-4'>
            <SideProfile />
          </section>

          <section className='flex flex-col max-w-sm lg:max-w-xl'>
            <Portfolio />
          </section>
        </main>
      </ScrollProvider>
    </main>
  );
}
