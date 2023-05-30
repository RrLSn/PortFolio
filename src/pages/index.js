import About from "@/Components/About";
import ContactMe from "@/Components/ContactMe";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Projects";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <About />
        <Projects />
        <ContactMe />
      </main>
    </div>
  )
}
