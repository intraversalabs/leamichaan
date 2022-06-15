import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";
import imgAuthor from "../../assets/image/png/001_foto.png";
import Section2 from "../../components/Core/Section2";

const SectionStyled = styled(Section)``;

const Author = styled(Box)`
  min-width: 271px;
  max-width: 271px;
  min-height: 271px;
  max-height: 271px;
  border-radius: 500px;
  overflow: hidden;
  margin-bottom: 30px;
  @media ${device.lg} {
    margin-bottom: 0;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <Section2 bg="#FFF">
      <Container>
        <Row>
          <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title>Sobre a autora</Title>
            </div>
          </Col>
          <Col lg="4" className="offset-lg-1 mb-4 mb-lg-0">
            <Author>
              <img width="305" src={imgAuthor} alt="Author" />
            </Author>
          </Col>
          <Col lg="7" className="pr-lg-5">
            <div className="author-text">
              <Title variant="card" fontSize="24px">
                Léa Michaan
              </Title>
              <Text variant="medium" my={4}>
              Sou psicóloga clínica, psicanalista, escritora e palestrante. Me especializei em psicologia clínica, psicanálise, terapia cognitivo comportamental, terapia de casal e psicologia com foco em relacionamento humano. Sou apaixonada pela minha família, pela minha profissão, pela natureza e pela escrita. 
              </Text>
              <Text variant="medium" my={4}>
              Sou convidada regularmente para realizar palestras sobre psicologia, nas quais abordo diferentes temas como relacionamento humano, felicidade, superação, depressão, ansiedade, angústia, ciúme, inveja, etc.
              </Text>
              <Text variant="medium" my={4}>
              Adoro atender meus pacientes no consultório e ajudá-los a lidar com suas dores e questões internas e externas. Minha maior satisfação é ver meus pacientes aliviados e tranquilos após uma sessão. Constatar que aquilo que eu disse os ajudou a encontrar saídas e caminhos para lidarem com as dificuldades, observar que o sofrimento diminui e a esperança aumenta. Esta é a maior gratificação que eu tenho.
              </Text>
              <Text variant="medium" my={4}>
              Em última instância, meu propósito é este: ajudar as pessoas a terem uma vida mais plena e feliz. 
              </Text>
              <Text variant="medium" my={4}>
              E foi por isso que decidi escrever “Como Esquecer Um Grande Amor”. Para expandir as paredes do meu consultório e ajudar aqueles que estão sofrendo.
              </Text>
              <Text variant="medium" my={4}>
              Espero conseguir ajudar o maior número de pessoas a encontrar um pouco de paz no coração.
              </Text>
              {/* <Text variant="small" mt={4}>
                {" "}
                Reach me on{" "}
                <a href="/" target="_blank">
                  <Span color="secondary">Twitter</Span>
                </a>{" "}
                or{" "}
                <a href="/" target="_blank">
                  <Span color="secondary">Email</Span>
                </a>
                .
              </Text> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Section2>
  </>
);

export default Fact;
