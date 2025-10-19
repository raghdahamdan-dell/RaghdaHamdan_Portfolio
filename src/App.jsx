import About from "./componenets/About";
import Blog from "./componenets/Blog";
import Contact from "./componenets/Contact";
import Experience from "./componenets/Experience";
import Hero from "./componenets/Hero";
import MeetSchedule from "./componenets/MeetSchedule";
import Navbar from "./componenets/Navbar";
import Project from "./componenets/Project";
import Technologies from "./componenets/Technologies";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased
       selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8 ">
          <Navbar />
          <Hero />
          <About />
          <Technologies/>
          <Experience />
          <MeetSchedule/>
          <Blog />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  )
}