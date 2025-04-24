
import Hero from "./Hero"
import AboutBlock from "./AboutBlock"
import Footer from "./Footer"

export default function Home() {
    return(
        <div className='grid'>
            {/* <Header/> */}
            <Hero/>
            <AboutBlock/>
            <Footer/>
        </div>
    )
}