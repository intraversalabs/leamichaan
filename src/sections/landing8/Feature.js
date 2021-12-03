import React from "react";
import { rgba } from "polished";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import img01 from "../../assets/image/svg/icones-03.svg";
import img02 from "../../assets/image/svg/icones-02.svg";
import img03 from "../../assets/image/svg/icones-05.svg";
import img04 from "../../assets/image/svg/icones-04.svg";
import img05 from "../../assets/image/svg/icones-01.svg";
import img06 from "../../assets/image/png/562.png";

import { Title, Title2, Section, Box, Text } from "../../components/Core";
import Section2 from "../../components/Core/Section2";

const ContentCard = ({
  color = "#fff",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    size="100%"
    width="100%"
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    // css={`
    //    margin-left="200px"
    // `}
  >
    <Box
      size={85}
      minWidth={85}
      borderRadius="50%"
      color="#DBDAF5"
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        color: #DBDAF5;
      `}
      mr={3}
    >
      <img src={iconName}></img>
    </Box>
    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const FeatureCard = ({
  color = "#696871",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="#696871" p="20px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
        css={`
          background-color: #000
        `}
      >
        <i className={`icon ${iconName}`}></i>
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature2 = () => (
  <>
    <Section2 >
        {/* <Container>
       
        </Container> */}
      <Container>
      <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
                <div>
                  <div id="title2"><Title2>
                  Aprenda as estratégias mais eficazes da{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" /> da
                  se libertar disso, este e-book é para você.
                </Title2></div>
                
                <Text>
                  Você terá em mãos um guia prático de como esquecer um amor e se tornar mais independente emocionalmente.
                </Text>
               
              </div>
              {/* </div> */}
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
               {/* <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              > */}
              {/* <iframe src="https://player.vimeo.com/video/593357178?h=a0cf868b9e" width="100%" height="100%" allow="autoplay; fullscreen; picture-in-picture"></iframe> */}
              <img width="100%" height="100%" src={img06}></img>
              {/* </div> */}
            </Col>

            
            
          </Row>
        <br></br>
        <br></br>
        <Row className="justify-content-center">
          <Col
            lg="6"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Domine seus sentimentos"
              color="primary"
              iconName={img01}
            />
          </Col>
          <Col
            lg="6"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Alivie sua dor"
              color="secondary"
              iconName={img02}
            />
          </Col>
          <Col
            lg="6"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Liberte-se dos pensamentos que te fazem sofrer"
              color="warning"
              iconName={img03}
            />
          </Col>
          <Col
            lg="6"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Desenvolva independência emocional"
              color="secondary"
              iconName={img04}
            />
          </Col>
        </Row>
       
      </Container>
    </Section2>
  </>
);

export default Feature2;
