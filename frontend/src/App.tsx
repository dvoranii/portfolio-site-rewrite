import "./App.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Companies from "./sections/Companies/Companies";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Web Portfolio - Ildi Dvorani</title>
          <meta
            name="description"
            content="Ildi Dvorani: Experienced Full Stack JavaScript Developer specialized in React. Explore my portfolio to 
            view my latest projects, skills, and let's collaborate to bring your vision to life."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#3498db" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            href="/assets/icons/ildidev-logo_144x144.png"
            type="image/png"
          />
        </Helmet>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Companies />
        <Projects />
      </HelmetProvider>
    </>
  );
}

export default App;
