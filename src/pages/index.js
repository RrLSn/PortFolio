import About from "@/Components/About";
import ContactMe from "@/Components/ContactMe";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Projects";
import Social from "@/Components/Social";

export default function Home() {
  return (
    <div className="w-[100vw] h-[max-content] overflow-hidden">
      <NavBar />
      <About />
      <Projects />
      <Social />
      <ContactMe />
    </div>
  )
}
