import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PostHero from "./components/PostHero";
import Collections from "./components/Collections";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <PostHero />
      <Collections />
      <Offer />
    </>
  );
}

export default App;
