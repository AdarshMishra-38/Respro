import Footer from "../footer/footer.jsx";
import Feature from "./features/feature.jsx";
import Hero from "./hero/hero.jsx";
import Workflow from "./workflow/workflow.jsx";

export default function Home() {
    return (
        <div className="home">
          
          <Hero />
          <Workflow />
          <Feature />
          <Footer/>
        </div>
    );
}