
import './App.css'
import Hero from "./sections/Hero/Hero"
import { useTheme } from "./common/ThemeContext"
import Projects from "./sections/Projects/Projects"
function App() {


  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}

export default App
