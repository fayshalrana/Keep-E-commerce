import React from "react";
import Category from "../components/screen/Home/category/Category";
import NewCollection from "../components/screen/Home/NewCollection/NewCollection";
import CallToAction from "../components/screen/Home/CallToAction/CallToAction";
import Blog from "../components/screen/Home/Blog/Blog";
import Instagram from "../components/screen/Home/Instagram/Instagram";
import HeroSection from "../components/screen/Home/Hero/HeroSection";
import Feature from "../components/screen/Home/Feature/Feature";

function Home() {
  return (
    <React.Fragment>
      <HeroSection/>
      <Category/>
      <NewCollection/>
      <CallToAction/>
      <Blog/>
      <Instagram/>
      <Feature/>
    </React.Fragment>
  );
}

export default Home;
