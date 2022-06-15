import React from "react";
import styled from "styled-components";
import { device } from "../../utils";



const DivStyled2 = styled.div`
background-color:  #DBDAF5;

  padding: 50px 0;
  @media ${device.md} {
    padding: 75px 0;
  }
  @media ${device.lg} {
    padding: 100px 0;
  }
`;

const DivStyledInside2 = styled(DivStyled2)`
background-color: #DBDAF5;

  padding: 50px 25px;
  @media ${device.md} {
    padding: 70px 60px;
  }
  @media ${device.lg} {
    padding: 80px 70px;
  }
`;


const Section2 = ({ children, inside, ...rest }) => {
  return inside ? (
    <DivStyledInside2 {...rest}> {children}</DivStyledInside2>
  ) : (
    <DivStyled2 {...rest}> {children}</DivStyled2>
  );
};

export default Section2;
