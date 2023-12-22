import About from "./about/page";
import Contact from "./contact/page";
import Header from "./header/page";
import Portfoliyu from "./portfoliyu/page";
import Skill from "./skill/page";


export default function Home() {

  
  return (
    <div className="bg-slate-950 scroll-smooth">
      <Header />
      <About />
      <Skill />
      <Portfoliyu />
      <Contact />
    </div>
  )
}