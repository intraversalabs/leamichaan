import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 25px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Paragraph2 = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 25px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Paragraph3 = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 30px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Paragraph4 = styled.p`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 30px;
  margin-left: -40px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;



const ParagraphSmall = styled(Paragraph)`
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 20px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Text = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case "small":
      TextRender = ParagraphSmall;
      break;
    case "test":
        TextRender = Paragraph2;
        break;  
    case "medium":
        TextRender = Paragraph3;
        break;
    case "special":
          TextRender = Paragraph4;
          break;              
    default:
      TextRender = Paragraph;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;
