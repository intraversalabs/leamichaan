import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const SectionStyled = styled(Section)``;

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: #FF5C39;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    margin-top: 20px;
    left: 0;
  }
`;

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`;

const FaqTitle2 = styled(Title)`
  color: #000;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  margin-top: 24px;
  line-height: 2rem;
`;

const Faq = () => (
  <>
    {/* <!-- Faq section --> */}
    <SectionStyled bg="ash">
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle2 color="#000">Para quem é este e-book?</FaqTitle2>
                <Text variant="small" color="#000" opacity={0.7}>
                Este e-book é para todos aqueles que estão sofrendo por causa de um amor.
Independente de qual seja o cenário: pode ser o término de um relacionamento,
um amor não correspondido ou até mesmo um amor impossível. Este e-book vai
ajudar as pessoas que estão sofrendo por causa de amor.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle2>Este e-book vai realmente me ajudar?</FaqTitle2>
                <Text variant="small" color="#000" opacity={0.7}>
                Se o seu objetivo é esquecer e superar um amor, pode ter certeza de que este
e-book irá te ajudar.
Sou psicóloga há mais de vinte anos e uma das minhas especialidades é lidar
com o sofrimento amoroso. Já atendi centenas de pacientes que chegaram ao
meu consultório com um buraco no coração e que estavam sofrendo muito por
causa de amor. Quase todos meus pacientes saíram mais aliviados e com mais
ferramentas mentais para dominar os sentimentos negativos e superar o amor.
Toda minha experiência e meu conhecimento sobre este assunto foram
detalhadas neste e-book.
Tenho muita segurança de que este e-book irá te ajudar muito a aliviar o
sofrimento e seguir em frente com sua vida.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle2>Como consigo acessar o e-book, após a compra?</FaqTitle2>
                <Text variant="small" color="#000" opacity={0.7}>
                 Ao comprar seu e-book você conseguirá baixá-lo logo em seguida e poderá desfrutar sua leitura onde e quando quiser..
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle2>Se eu não gostar do e-book, posso devolvê-lo e receber meu dinheiro de
volta?</FaqTitle2>
                <Text variant="small" color="#000" opacity={0.7}>
                Sim, com certeza! Ao comprar o e-book, você ganha 15 dias de período experimental. Se você não se identificar com o e-book, você pode solicitar o reembolso. Lhe devolveremos o dinheiro e ainda deixaremos que você fique com o e-book. Quem sabe ele não lhe pode ser útil no futuro? :)
                </Text>
              </div>
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Faq;
