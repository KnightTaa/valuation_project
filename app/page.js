import Image from "next/image";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Types from "./components/Types";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <Types />
      <ContactForm />
      <Testimonial />
    </main>
  );
}
