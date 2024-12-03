
import './App.css'
import Hero from "./sections/Hero/Hero"
import { useTheme } from "./common/ThemeContext"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/Footer/Footer"
function App() {


  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
