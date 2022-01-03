import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../components/Core";


import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";


import imgVideo from "../../assets/image/png/ver04.webp";

const IconButton = styled(Box)`
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  width: 1000px;
  height: 64px;
  @media ${device.sm} {
    width: 500px;
    height: 100px;
  }
  @media ${device.md} {
    width: 1000px;
    height: 124px;
  }
  @media ${device.lg} {
    font-size: 20px;
    width: 1000px;
    height: 124px;
  }
`;

const VideoCTA = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- VideoCTA Area --> */}
      
      <Box className="position-relative overflow-hidden">
      
        <img src={imgVideo} alt="" className="w-100 img-fluid" />
        <IconButton>
        <Box>
                  <Title variant="exc" color="light">
                    Comece a ler o e-book, onde e quando quiser. 
                  </Title>
                  {/* <Text mb={4} color="light" opacity={0.7}>
                    Create custom landing pages with Omega that convert more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text> */}
                 
                </Box>
              
        </IconButton>
     
      </Box>
      {/* <Container>
          
        </Container> */}
      
      
    </>
  );
};

export default VideoCTA;
