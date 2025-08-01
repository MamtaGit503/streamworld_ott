import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Subscriptions from "./components/Subscriptions";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection id="Home" />
        <Features id="Features" />
        <Gallery id="Gallery" />
        <Video id="Video" />
        <Testimonials id="Testimonials" />
        <Subscriptions id="Subscriptions" />
        <Contact id="Contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
