import Header from "./components/common/Header"
import ComparisonSection from "./components/pages/landingPage/ComparisonSection"
import FeaturesStrip from "./components/pages/landingPage/FeaturesStrip"
import HeroSection from "./components/pages/landingPage/HeroSection"
import HowItWorks from "./components/pages/landingPage/HowItWorks"
import Testimonials from "./components/pages/landingPage/Testimonials"


function App() {


  return (
    <>
     <Header/>
     <HeroSection/>
     <FeaturesStrip/>
     <ComparisonSection/>
     <HowItWorks/>
     <Testimonials/>
    </>
  )
}

export default App
