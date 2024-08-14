import SideProfile from "@/sections/SideProfile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 antialiased lg:flex-row lg:justify-center">
      <SideProfile />
    </main>
  );
}
