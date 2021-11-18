import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2`
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 16px;

  @media ${device.sm} {
    max-width: 1200px;
    font-size: 40px;
    line-height: 62px;
  }

  @media (min-width: 850px) {
    max-width: 1000px;
    font-size: 48px
    line-height: 70px;
    margin-bottom: 30px;
  }

  @media ${device.lg} {
    max-width: 1200px;
    font-size: 48px;
    line-height: 70px;
    margin-bottom: 30px;
  }

  @media (min-width: 1180px) {
    max-width: 1200px;
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 30px;
  }


  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const SectionTitle2 = styled.h2`
  margin-top: -40px;
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 30px;
  line-height: 54px;
  margin-bottom: 16px;

  @media ${device.sm} {
    max-width: 1200px;
    font-size: 30px;
    line-height: 62px;
  }

  @media (min-width: 850px) {
    max-width: 1000px;
    font-size: 30px
    line-height: 70px;
    margin-bottom: 30px;
  }

  @media ${device.lg} {
    max-width: 1200px;
    font-size: 35px;
    line-height: 70px;
    margin-bottom: 30px;
  }

  @media (min-width: 1180px) {
    max-width: 1200px;
    font-size: 39px;
    line-height: 70px;
    margin-bottom: 30px;
  }


  ${color};
  ${space};
  ${typography};
  ${shadow};
`;


const HeroTitle = styled(SectionTitle)`
  letter-spacing: -2.81px;
  font-size: 50px;
  line-height: 56px;
  margin-bottom: 30px;

  @media ${device.sm} {
    font-size: 66px;
    line-height: 70px;
  }

  @media ${device.lg} {
    font-size: 76px;
    line-height: 84px;
  }

  @media ${device.xl} {
    font-size: 80px;
    line-height: 84px;
  }
`;

const CardTitle = styled.h4`
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  margin-top: 10px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Title = ({ variant, ...rest }) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    case "exc":
      TitleStyled = SectionTitle2;
      break;  
    default:
      TitleStyled = SectionTitle;
  }

  return <TitleStyled color="heading" {...rest} />;
};


export default Title;
