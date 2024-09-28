import About from "./components/About";
import Experience from "./components/Experience";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Customer from "./components/Customer";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className=" mx-auto px-8">
      <Navbar/>
        <Customer/>
      </div>
    </div>
  );
}


/*
<Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
*/