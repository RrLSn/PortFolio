import About from "@/Components/About";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <About />
    </div>
  )
}
