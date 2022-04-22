import React from "react";
import Hero from "../sections/landing5/Hero";
import Feature from "../sections/landing8/Feature";
import Testimonial from "../sections/landing2/Testimonial";
import Author from "../sections/landing5/Author";
import Pricing from "../sections/landing5/Pricing/Pricing";
import Faq from "../sections/landing5/Faq";
import PageWrapper from "../components/PageWrapper";
import VideoCTA from "../sections/landing6/VideoCTA";
import BlogDetails from "./blog-details";
import Career from "./career";

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
        <VideoCTA />
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default LandingPage5;
