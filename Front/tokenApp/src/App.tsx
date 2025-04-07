
import Home from './components/Home.tsx'
import PageAccount from './components/PageAccount.tsx'
import "./styles/main.scss"
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from './components/Layout.tsx'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/account' element={<PageAccount/>}/>
        </Route>
      {/* <div className='grid'>
        <Header/>
        <Hero/>
        <AboutBlock/>
        <Footer/>
        
      </div> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
