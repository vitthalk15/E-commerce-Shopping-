import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero/>
      <NewProducts/>
      <Testimonial/>
    </main>
  );
}
