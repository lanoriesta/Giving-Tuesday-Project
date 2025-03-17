import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainKeyVisualSection from "./components/MainKeyVisualSection";
import CountdownSection from "./components/CountdownSection";
import MainDescSection from "./components/MainDescSection";
import CurrCampSection from "./components/CurrCampSection";
import ActivitiesSection from "./components/ActivitiesSection";
import PartnersSection from "./components/PartnersSection";

function App() {
  return (
    <>
      <Header />
      <MainKeyVisualSection />
      <CountdownSection />
      <MainDescSection />
      <CurrCampSection />
      <ActivitiesSection />
      <PartnersSection />
    </>
  );
}

export default App;
