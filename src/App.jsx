
import './App.css'
import Hero from "./sections/Hero/Hero"
import { useTheme } from "./common/ThemeContext"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
function App() {


  return (
    <>
      <Hero />
      <Projects />
      <Skills />
    </>
  )
}

export default App
