import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PostHero from "./components/PostHero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <PostHero />
    </>
  );
}

export default App;
