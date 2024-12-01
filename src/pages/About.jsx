import React from "react";
import Banner from "../components/screen/About/Banner";
import AboutUs from "../components/screen/About/AboutUs/AboutUs";
import Testimonial from "../components/screen/About/Testimonial/Testimonial";
import AboutCanvas from "../components/screen/About/AboutCanvas/AboutCanvas";
import OurTeam from "../components/screen/About/Team/OurTeam";
import Feature from "../components/screen/Home/Feature/Feature";

const About = () => {
  return (
    <React.Fragment>
      <Banner />
      <AboutUs />
      <Testimonial />
      <AboutCanvas/>
      <OurTeam/>
      <Feature/>
    </React.Fragment>
  );
};

export default About;
