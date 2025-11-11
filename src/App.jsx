import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './Projects'
import Footer from './Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className='bg-cream min-h-screen'>
      <ScrollProgress />
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
