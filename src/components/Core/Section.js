import React from "react";
import Box from "./Box";

const Section = (props) => {
  return <Box py={[6, null, "80px", 5]} {...props} />;
};

export default Section;
