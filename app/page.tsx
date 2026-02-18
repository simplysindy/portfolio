import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const host = headersList.get("host") || "";

  if (host.includes("cuveeglow.com")) {
    return <main>:)</main>;
  }

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
