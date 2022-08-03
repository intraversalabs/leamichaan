import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, List } from "../components/Core";
import Section2 from "../components/Section2";

const Politics = () => {
  return (
    <>
      <PageWrapper >
        <Section2>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                {/* <Title variant="hero" className="text-center"> */}
                <Title variant="hero" className="text-center">
                Política de devolução e reembolso
                </Title>
                <br></br>
                <Text variant="medium">
                Criamos uma política de reembolso simples e fácil, que dará tranquilidade para você comprar o e-book sem preocupações.
                </Text>
                <br></br>
                <Text variant="medium">
                Daremos 15 dias para você ler o e-book com calma. 
                </Text>
                <br></br>
                <Text variant="medium">
                Se em até 15 dias após a compra, não sentir que o e-book te ajudou, entre em contato conosco no email: atendimento@leamichaan.com, envie o seu comprovante de compra e solicite o reembolso do valor investido. 
                </Text>
                <br></br>
                <Text variant="medium">
                Devolveremos 100% do seu dinheiro.
                </Text>
                <br></br>
               
  
              </Col>
            </Row>
          </Container>
        </Section2>
      </PageWrapper>
    </>
  );
};
export default Politics;
