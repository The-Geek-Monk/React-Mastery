import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import FooterSection from "./FooterSection";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AppSection />
      <CardSection />
      <FooterSection />
    </div>
  );
};
export default App;
