import React from "react";
import Hero from "../Components/Hero";
import Details from "../Components/Details";

export default function Home() {
  return (
    <div style={{ paddingBottom: "120px", marginTop: "40px" }}>
      <Hero />
      <Details />
    </div>
  );
}