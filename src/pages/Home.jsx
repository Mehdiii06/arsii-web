import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Events from "../components/Events";
import Partners from "../components/Partners";
import Blog from "../components/Blog";
import ArsiiJuniors from "../components/ArsiiJuniors";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero /> {/* 1. hero */}
      <Projects /> {/* 2. projects */}
      <Events /> {/* 3. events */}
      <ArsiiJuniors /> {/* 4. arsii juniors */}
      <Blog /> {/* 5. recent posts */}
      <Partners /> {/* 6. our partners */}
      <Contact /> {/* 7. contact us */}
    </>
  );
}
