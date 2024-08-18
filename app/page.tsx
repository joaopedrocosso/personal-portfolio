import { ScrollProvider } from "@/providers/ScrollProvider";
import Portfolio from "@/sections/Portfolio";
import SideProfile from "@/sections/SideProfile";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:gap-32 antialiased justify-center">
      <ScrollProvider>
        <section className="p-4 lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center pb-4">
          <SideProfile />
        </section>

        <section className="flex flex-col max-w-sm lg:max-w-xl">
          <Portfolio />
        </section>
      </ScrollProvider>
    </main>
  );
}
