import ApiReference from "./components/ApiReference";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Guard from "./components/Guard";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Orchestration from "./components/Orchestration";
import Stack from "./components/Stack";
import Tools from "./components/Tools";
import Verify from "./components/Verify";
import "./components/sections.css";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Features />
        <Orchestration />
        <Verify />
        <Guard />
        <Tools />
        <ApiReference />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
