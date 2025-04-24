
import Hero from "./HeroBlock"
import AboutBlock from "./About"
import Footer from "./FooterBlock"

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