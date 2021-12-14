import styled from "styled-components";
import { device } from "../../utils";

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from "styled-system";

const Box3 = styled.div`
  box-sizing: border-box;
  min-width: 0;
  margin-top: 12px;
  margin-bottom: 22px;
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${typography};
  ${background};
  ${border};
  ${position};
  ${shadow};

  @media ${device.lg} {
    max-width: 1200px;
    font-size: 38px;
    height: 350px;
    line-height: 45px;
    margin-bottom: 30px;
  }

  @media ${device.sm} {
    max-width: 1200px;
    font-size: 38px;
    height: 350px;
    line-height: 45px;
    margin-bottom: 40px;
  }

`;

export default Box3;
