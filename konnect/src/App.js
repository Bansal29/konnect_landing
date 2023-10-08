import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Social from "./components/Social/Social.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Assistant from "./components/Assistant/Assistant.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Social />
      <Assistant />
    </div>
  );
}
export default App;
