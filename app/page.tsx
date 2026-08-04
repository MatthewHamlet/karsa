import Image from "next/image";
import Navbar from "./section/Navbar";
import NavbarTransparent from "./section/NavbarTransparent";
import HeroVideo from "./section/HeroVideo";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-white text-slate-950">
      <NavbarTransparent />
      <HeroVideo />
    </main>
    );
}
