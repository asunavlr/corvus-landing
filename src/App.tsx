import { useEffect } from "react";
import ApiReference from "./components/ApiReference";
import Desktop from "./components/Desktop";
import Docs from "./components/Docs";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Guard from "./components/Guard";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Network from "./components/Network";
import Orchestration from "./components/Orchestration";
import Pricing from "./components/Pricing";
import Proxy from "./components/Proxy";
import Shots from "./components/Shots";
import Stack from "./components/Stack";
import Tools from "./components/Tools";
import Trail from "./components/Trail";
import Updates from "./components/Updates";
import Verify from "./components/Verify";
import { initReveal } from "./lib/anim";
import "./components/sections.css";

export default function App() {
  /* Um revelador só para as doze seções: cada elemento marcado com data-rise
     sobe quando entra na tela, em fila com os vizinhos que entraram junto. */
  useEffect(() => initReveal(), []);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Proxy />
        <Shots />
        <Updates />
        <Feedback />
        <Network />
        <Features />
        <Orchestration />
        <Verify />
        <Guard />
        <Desktop />
        <Trail />
        <Tools />
        <ApiReference />
        <Stack />
        <Docs />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
