import Container from "@/components/Container";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import GithubActivity from "./sections/GithubActivity";
import Hero from "./sections/Hero";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import Connect from "./sections/Connect";
import { Quote } from "./sections/Quote";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Contact />
        <GithubActivity />
        <Projects />
        <TechStack />
        {/* <Blogs /> */}
        <Connect />
        <Quote />
        <Footer />
      </Container>
    </>
  );
}
