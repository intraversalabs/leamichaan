import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Span } from "../../components/Core";

import img01 from "../../assets/image/svg/PagamentoSeguro_roxo.svg";
import img02 from "../../assets/image/svg/acessoimediato_roxo.svg";
import img03 from "../../assets/image/svg/30dias_roxo.svg";
import Box2 from "../../components/Core/Box2";


const FeatureCard = ({
  color = "#fff",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box2 width={"100%"} bg="#fff" p="20px" borderRadius={10} {...rest}>
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
          background-color: #fff
        `}
      >
        <i className={`icon ${iconName}`}></i>
        <img src={`${iconName}`}></img>
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
  </Box2>
);


const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#DBDAF5" className="position-relative" pb="80px !important">
        <Container>
          <Row className="align-items-center">
          <Col lg="6" md={9} className="order-lg-1">
              <div id="videocta">
                <iframe width="100%" height="300px" src="https://www.youtube.com/embed/JZwmJKh0V8s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
           <Col  lg="6" className="mb-4 mb-lg-0 pl-lg-3 order-lg-2">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box pt={[4, null, null, 2]} pl={5}>
                  <Title>
                  Se você está sofrendo por causa de um amor
                  e quer se libertar disso, este e-book
                  é para você.
                  </Title>
                  <div className="d-flex flex-column align-items-start pt-2">
                    <Button mb={2}>Compre o e-book agora</Button>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
          <br/>
          <Row className="justify-content-center">
             <Col
                  md="4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName={img01}
                    title="Pagamento seguro"
                  >
                    Ambiente seguro. Seus dados estão protegidos e sua compra é 100% segura.
                  </FeatureCard>
              </Col>

              <Col
                  md="4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName={img02}
                    title="Acesso imediato"
                  >
                    Você receberá o link para download do e-book no seu email, imediatamente após a compra.
                  </FeatureCard>
              </Col>

              <Col
                  md="4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName={img03}
                    title="15 dias de garantia"
                  >
                    Você terá direito a reembolso de 100% do seu dinheiro dentro deste prazo.
                  </FeatureCard>
              </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;