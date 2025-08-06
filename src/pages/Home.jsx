import Definition from "../components/Definition"
import Footer from "../components/Footer"
import Header from "../components/Head"
import SectionOne from "../components/SectionOne"
import Others from "../components/sectiontree"
import Projects from "../components/sectionTwo"

function Home (){
    return <div>
        
        <Definition />
        <SectionOne />
        <Projects />
        <Others />
        <Footer />
    </div>
}

export default Home