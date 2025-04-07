
import Hero from "./hero"
import AboutBlock from "./aboutBlock"
import Footer from "./footer"

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