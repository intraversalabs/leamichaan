import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";
import imgAuthor from "../../assets/image/png/perfil.png";

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
    <SectionStyled bg="#FFF">
      <Container>
        <Row>
          <Col xs="12" className="mb-5">
            <div className="text-center">
              <Title>Sobre a autora</Title>
            </div>
          </Col>
          <Col lg="4" className="offset-lg-1 mb-4 mb-lg-0">
            <Author>
              <img width="275" src={imgAuthor} alt="Author" />
            </Author>
          </Col>
          <Col lg="7" className="pr-lg-5">
            <div className="author-text">
              <Title variant="card" fontSize="24px">
                Léa Michaan
              </Title>
              <Text variant="small" my={4}>
              Léa é psicóloga clínica, psicanalista, escritora e palestrante. Mestre em
psicologia clínica, especializada em psicanálise, terapia cognitivo
comportamental, terapia de casal e psicologia com foco em relacionamento
humano.Apaixonada por sua família, por sua profissão, pela natureza e pela escrita.
É convidada regularmente para realizar palestras sobre psicologia, nas quais
aborda diferentes temas como relacionamento humano, felicidade, superação,
depressão, ansiedade, angústia e inveja.
              </Text>
              <Text variant="small">
              Além disso, Léa é especialista em estratégias psicológicas para desenvolver a
inteligência emocional das pessoas e estimulá-las a lidar com sentimentos hostis
e a melhorar o relacionamento do indivíduo consigo mesmo.
“Meu principal objetivo é auxiliar as pessoas a conhecerem a si mesmas e
desenvolverem uma relação única, singular e autêntica com o
mundo, com a vida, com o outro e, principalmente, consigo mesma”.
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
    </SectionStyled>
  </>
);

export default Fact;
