import { ScrollProvider } from "@/providers/ScrollProvider";
import Portfolio from "@/sections/Portfolio";
import SideProfile from "@/sections/SideProfile";

export default function Home() {
  return (
    <main className="p-6 md:p-8 lg:p-0 flex flex-col lg:flex-row lg:gap-32 antialiased justify-center">
      <ScrollProvider>
        <section className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:justify-between lg:items-start lg:py-20 p-4">
          <SideProfile />
        </section>

        <section className="flex flex-col lg:max-w-xl">
          <Portfolio />
        </section>
      </ScrollProvider>
    </main>
  );
}
