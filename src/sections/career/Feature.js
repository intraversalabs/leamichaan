import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text, Title, Button2 } from "../../components/Core";
import { Box3 } from "../../components/Core";
import styled, { keyframes } from "styled-components";
import Section2 from "../../components/Core/Section2";
import Box4 from "../../components/Core/Box4";

const animRippleOut = keyframes`
    100% {
      top: -12px;
      right: -12px;
      bottom: -12px;
      left: -12px;
      opacity: 0;
    }
`;

const InnerCircle = styled(Box)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const OuterCircle = styled(Box)`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
  transform: perspective(1px) translateZ(0);
  background-color: ${({ theme, bg }) => rgba(theme.colors[bg], 0.06)};
  &:before {
    content: "";
    position: absolute;
    border: ${({ theme, bg }) => `6px solid ${rgba(theme.colors[bg], 0.08)}`};
    border-radius: 500px;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    animation: ${animRippleOut} 1.2s linear 1s infinite;
  }
`;

const FeatureCard = ({ color = "secondary", title, children, ...rest }) => (
  <Box width={"100%"} bg="light" {...rest}>
    <div className="justify-content-initial align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        backgroundColor="#a4sd"
        color={color}
        fontSize="28px"
        className="justify-content-center align-items-center"
        mr="20px"
      >
        {/* <InnerCircle bg={color} />
        <OuterCircle bg={color} /> */}
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
        <Text variant="test" fontSize={3} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const ContentCard = ({
  className,
  // image,
  name,
  stars = 5,
  company,
  children,
  ...rest
}) => (
  <Box4
    minHeight="10px"
    bg="light"
    border="0.1rem solid"
    borderColor="border"
    p="30px"
    mx="20px"
    borderLeftColor= "#6f42c1"
    borderLeftWidth="20px"
    borderRadius={10}
    className={`${className}`}
    {...rest}
    css={`
      height: 200px;
      &:focus {
        outline: none;
      }
    `}
  >
    <div>
      {/* <img
        src={stars === 5 ? img5Star : img4Star}
        alt=""
        className="img-fluid"
      /> */}
    </div>
    <br></br>
     <Box className={`d-flex justify-content-between`}>
      {/* <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box> */}
      <div className="flex-grow-1">
        <Title variant="card-box-2" mb={4}>
          {name}
        </Title>
        {/* <Text fontSize={2}>{company}</Text> */}
      </div>
    </Box>
    <Text variant="small-box" color="dark" mb={4}>
      {children}
    </Text>  
   
  </Box4>
);


const Feature = () => (
  <>
    <Section2 pt="0!important" bg="#DBDAF5">
        
    
      <Container>
  
        <Row className="">
      
        {/* < Col lg="10">
              <Title variant="hero" className="mb-0">
              Um e-book especializado em libertar as pessoas. Confira os cap??tulos:
              </Title>
            </Col>  */}
            <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title variant="hero">Um e-book especializado em libertar as pessoas. Confira os cap??tulos:</Title>
            </div>
          </Col>     
        
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 1."
                    company="CEO at Creativex"
                  >
                    A escolha mais dif??cil e mais importante que voc?? deve fazer para esquecer um amor.
                  </ContentCard>
        </Col> 
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 2."
                    company="CEO at Creativex"
                  >
                    Quais s??o os 2 tipos de rejei????o amorosa e como n??o dar bola para eles.
                  </ContentCard>
        </Col> 
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 3."
                    company="CEO at Creativex"
                  >
                    Como usar ativamente a nossa aten????o quando o objetivo ?? esquecer.
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 4."
                    company="CEO at Creativex"
                  >
                    O sentimento que nos queima por dentro - o ci??me.
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 5."
                    company="CEO at Creativex"
                  >
                    Por que ?? t??o dif??cil esquecer um amor? Na compreens??o desta pergunta, reside a supera????o.
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 6."
                    company="CEO at Creativex"
                  >
                    Tudo o que voc?? precisa saber, seu corpo j?? sabe e est?? tentando te ensinar desde que voc?? nasceu. Voc?? vai se surpreender.
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 7."
                    company="CEO at Creativex"
                  >
                    Escolha os sentimentos que te fazem sorrir. 
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 8."
                    company="CEO at Creativex"
                  >
                    Precisamos falar novamente sobre o ci??me.   
                  </ContentCard>
        </Col> 

        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 9."
                    company="CEO at Creativex"
                  >
                    Amor: poderoso para o bem e para o mal.
                  </ContentCard>
        </Col> 
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 10."
                    company="CEO at Creativex"
                  >
                    Para me relacionar com o outro, a primeira rela????o que preciso desenvolver ?? comigo mesmo. Por qu??? E como fazemos isso?
                  </ContentCard>
        </Col> 
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 11."
                    company="CEO at Creativex"
                  >
                    Trai????o. Uma nova perspectiva sobre este assunto pol??mico.
                  </ContentCard>
        </Col> 
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 12."
                    company="CEO at Creativex"
                  >
                    Tecnoci??me. O ci??me na era digital.
                  </ContentCard>
        </Col>     
        <Col md="6" xl="4" className="mb-5">
        <ContentCard
                    name="Cap??tulo 13."
                    company="CEO at Creativex"
                  >
                    O amor genu??no liberta. Se voc?? ama de verdade, o amor ?? o que te far?? livre.  
                  </ContentCard>
        </Col>          
        </Row>
      </Container>
    </Section2>
  </>
);

export default Feature;
