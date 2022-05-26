import React from "react";
import Hero from "../sections/landing5/Hero";
import Feature from "../sections/landing8/Feature";
import Testimonial from "../sections/landing2/Testimonial";
import Author from "../sections/landing5/Author";
import Pricing from "../sections/landing5/Pricing/Pricing";
import Faq from "../sections/landing5/Faq";
// import Content3 from "../sections/landing8/Content3";
import PageWrapper from "../components/PageWrapper";
import VideoCTA from "../sections/landing6/VideoCTA";
import BlogDetails from "./blog-details";
import Career from "./career";
import Content3 from "../sections/landing3/Content3";

const LandingPage5 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Feature />
        <Testimonial />
        <BlogDetails/>
        <Career/>
        <Author />
        {/* <Content3 /> */}
        <VideoCTA />
        <Content3 />
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default LandingPage5;
