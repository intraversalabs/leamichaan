import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text } from "../../components/Core";
import styled, { keyframes } from "styled-components";
import Section2 from "../../components/Core/Section2";

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

const FeatureCard = ({ color = "primary", title, children, ...rest }) => (
  <Box width={"100%"} bg="light" {...rest}>
    <div className="d-flex justify-content-initial align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
      >
        <InnerCircle bg={color} />
        <OuterCircle bg={color} />
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

const Feature = () => (
  <>
    <Section2 pt="0!important">
      <Container>
        <Row className="">
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="1.">
            A escolha mais difícil e mais importante que você deve fazer para esquecer um amor.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="2.">
            Quais são os 2 tipos de rejeição amorosa e como não dar bola para eles.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="3.">
            Como usar ativamente a nossa atenção quando o objetivo é esquecer.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="4.">
            O sentimento que nos queima por dentro - o ciúme.        
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="5.">
            Por que é tão difícil esquecer um amor? Na compreensão desta pergunta, reside a superação.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="6.">
            Tudo o que você precisa saber, seu corpo já sabe e está tentando te ensinar desde que você nasceu. Você vai se surpreender.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="7.">
            Escolha os sentimentos que te fazem sorrir. 
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="8.">
            Precisamos falar novamente sobre o ciúme.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="9.">
            Amor: poderoso para o bem e para o mal. 
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="10.">
            Para me relacionar com o outro, a primeira relação que preciso desenvolver é comigo mesmo. Por quê? E como fazemos isso?
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="11.">
            Traição. Uma nova perspectiva sobre este assunto polêmico.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="12.">
            Tecnociúme. O ciúme na era digital.
            </FeatureCard>
          </Col>
          <Col md="6" xl="4" className="mb-5">
            <FeatureCard color="secondary" title="13.">
            Para me relacionar com o outro, a primeira relação que preciso desenvolver é comigo mesmo. Por quê? E como fazemos isso?
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </Section2>
  </>
);

export default Feature;
