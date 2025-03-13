import { useState } from 'react'
import "./styles/main.scss"
import Button from './components/button.tsx'
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
          
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <Button text='button' type='dark'/>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
      </div>
    </>
  )
}

export default App
