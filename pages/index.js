import Head from "next/head";
import Image from "next/image";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import { ToggleProvider, useToggle } from "./components/ToggleContext";

export default function Home() {
  const toggle = useToggle();
  return (
    <div>
      <Head>
        <title>Leo Wang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />
      <div className={`main ${toggle ? "active" : ""}`}>
        <TopBar />
        <Banner />
        <About />
        <Project />

        <Contact />
      </div>
    </div>
  );
}
