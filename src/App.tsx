import {Layout} from "./components/layout"
import Hero from "./components/sections/Hero"
import { Brands } from "./components/sections/Brands"
import { Services } from "./components/sections/Services"
import { About } from "./components/sections/About"
import { Pricing } from "./components/sections/Pricing"
import { CTA } from "./components/sections/CallToAction"
import {Scroller} from "./components/sections/Scroller"
import { CustomCursor } from "./components/CustomCursor"
import { ScrollToTop } from "./components/ScrollToTop";

function App() { 

  return (
    <Layout title="landing page">
      <ScrollToTop/>
      <CustomCursor/>
      <Scroller/>
      <Hero/>
      <Brands/>
      <Services/>
      <About/>
      <Pricing/>
      <CTA/>
    
    </Layout>
  )

}

export default App
