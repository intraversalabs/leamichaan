import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../components/Core";

import imgContent from "../../assets/image/png/Artboard2.png";

const SectionStyled = styled(Section)`
  // border-bottom: 1px solid #242427;
`;

const Content3 = () => (
  <>
    <SectionStyled bg="light">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <div>
              <div
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgContent} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Title color="dark">
              15 dias de Garantia com 100% do seu dinheiro de volta
              </Title>
              <Text color="darkShade">
              Compre o e-book e ganhe 15 dias para ler com calma. Se em até 15 dias não sentir que o e-book te ajudou, entre em contato conosco no email: xxxxx@xxxxxxx.com e solicite o reembolso do valor investido. Devolveremos 100% do seu dinheiro. 
              </Text>
              <div className="mt-5">
                <Button>Quero experimentar agora</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Content3;
