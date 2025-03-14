import { useState } from 'react'
import Footer from './components/footer.tsx'
import Hero from './components/hero.tsx'
import Header from './components/header.tsx'
import AboutBlock from './components/aboutBlock.tsx'
import "./styles/main.scss"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid'>
        <Header/>
        <div >
            {/* <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo}  alt="React logo" />
            </a> */}
          </div>
          <Hero/>
          <AboutBlock/>
          <Footer/>
        
      </div>
    </>
  )
}

export default App
