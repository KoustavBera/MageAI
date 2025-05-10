import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps.jsx";
import Description from "../components/Description.jsx";
import Testimonials from "../components/Testimonials.jsx";
import GenerateButton from "../components/GenerateButton.jsx";
const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateButton />
    </div>
  );
};

export default Home;
