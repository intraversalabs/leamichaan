import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgContent from "../../assets/image/png/ver04.png";

const ImgContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: -30%;

  @media ${device.xl} {
    right: -5%;
  }

 
`;

const Content3 = () => {
  return (
    <>
      {/* <!-- Content3 Area --> */}
      <Section bg="transparent" className="position-relative overflow-hidden">
        <ImgContainer className="d-none d-lg-block">
          <img  src={imgContent} alt="" className="img-fluid" />
        </ImgContainer>
        <Container>
          <Row className="">
            <Col lg="2" className="order-lg-3">
              
            </Col>
              <Col lg="8" className="order-lg-3">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-once="true"
              >
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
              </div>
             
            </Col>
            
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Content3;
