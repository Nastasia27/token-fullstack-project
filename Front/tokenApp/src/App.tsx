import { useState } from 'react'
import reactLogo from './assets/logo.jpeg'
import viteLogo from '/vite.svg'
import "./styles/main.scss"
import Button from './components/button.tsx'
import Hero from './components/hero.tsx'
import Header from './components/header.tsx'
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
          <div >
            <p>
              KopiToken – це експериментальний токен, створений для тестування та ознайомлення з блокчейн-технологіями. Він працює виключно у тестовій мережі Sepolia і не має реальної грошової вартості.
            </p>
            <p>
              Цей токен дозволяє взаємодіяти зі смарт-контрактами, тестувати перекази, інтеграцію з гаманцями та інші можливості блокчейну Ethereum без ризику втрати коштів.
            </p>
            <p>
              Увага: KopiToken не можна використовувати в основній мережі Ethereum, обмінювати на реальні активи або використовувати в комерційних цілях. Це виключно тестовий актив.
            </p>
            <p>
              Якщо тобі потрібен токен для тестування, ти можеш отримати його безкоштовно, використовуючи відповідний смарт-контракт у мережі Sepolia.
            </p>
          </div>
          
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
