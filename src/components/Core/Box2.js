import styled from "styled-components";
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

const Box2 = styled.div`
  box-sizing: border-box;
  min-width: 0;
  margin-top: 12px;
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
`;

export default Box2;
