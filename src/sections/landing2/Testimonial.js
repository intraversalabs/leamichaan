import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import { Title, Section, Box, Text } from "../../components/Core";
import { breakpoints } from "../../utils";

import imgC1 from "../../assets/image/jpeg/l1-customer2.jpg";
import imgC2 from "../../assets/image/jpeg/l1-customer3.jpg";


import img5Star from "../../assets/image/png/5star.png";
import img4Star from "../../assets/image/png/4star.png";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";

const SliderStyled = styled(Slider)`
  .slick-dots {
    position: relative;
    margin-top: 10px;
    li {
      font-size: 0;
      width: 17px;
      height: 8px;
      border-radius: 4px;
      background-color: #fff;
      margin-left: 5px;
      margin-right: 5px;
      transition: 0.5s;
      &.slick-active {
        width: 45px;
        height: 8px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
      button {
        width: 100%;
        height: 100%;
        &:before {
          content: none;
        }
      }
    }
  }
`;

const ContentCard = ({
  className,
  image,
  name,
  stars = 5,
  company,
  children,
  ...rest
}) => (
  <Box  height="500px"
    
    bg="light"
    border="1px solid"
    borderColor="border"
    p="30px"
    mx="20px"
    borderRadius={10}
    className={`${className}`}
    {...rest}
    css={`
      &:focus {
        outline: none;
      }
    `}
  >
    <div>
      <img
        src={stars === 5 ? img5Star : img4Star}
        alt=""
        className="img-fluid"
      />
    </div>
    <br></br>
    <Text color="dark" mb={4}>
      {children}
    </Text>
    <Box className={`d-flex justify-content-between`}>
      {/* <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box> */}
      <div className="flex-grow-1">
        <Title variant="card" mb={0}>
          {name}
        </Title>
        {/* <Text fontSize={2}>{company}</Text> */}
      </div>
    </Box>
  </Box>
);

const Testimonial = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Section bg="#DBDAF5">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title>Depoimentos</Title>
              </Box>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="11">
              <SliderStyled {...slickSettings}>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Ricardo"
                    company="CEO at Creativex"
                    image={imgC1}
                  >
                    "Obrigado dra. Léa! Mesmo! Você não tem noção de como seu e-book me ajudou a superar minha ex namorada. Estou finalmente seguindo em frente”.
                  </ContentCard>
                </Box>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Ana"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    “Como Esquecer Um Grande Amor me salvou da depressão. Juro, não tenho palavras para agradecer! Depois do término do meu último relacionamento eu estava no fundo do poço. Não conseguia reagir na vida. O livro me mostrou o caminho para a liberdade. E o melhor, descobri que sou capaz de dominar meus sentimentos"
                  </ContentCard>
                </Box>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Pedro"
                    company="CEO at Creativex"
                    image={imgC1}
                  >
                    “Este e-book é a bíblia de quem quer esquecer um grande amor.”
                  </ContentCard>
                </Box>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Marcela"
                    stars={4.5}
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    “O e-book é extremamente profundo e libertador. Libertador, porque descobri que consigo me libertar da prisão mental dos pensamentos ruins. Indico este livro para quem quiser aprender a dominar seus pensamentos.”
                  </ContentCard>
                </Box>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Patrícia"
                    company="CEO at Creativex"
                    image={imgC1}
                  >
                    “Tudo na vida é percepção, inclusive o sofrimento. O livro da dra. Lea mostra que ao mudar nossa percepção, temos a chance de transformar sofrimento em oportunidade de crescimento. Este é o objetivo maior deste livro: tornar o sofrimento dos leitores em psicologia produtiva. Dou nota mil ao livro da querida Lea!”
                  </ContentCard>
                </Box>
                <Box
                  css={`
                    &:focus {
                      outline: none;
                    }
                  `}
                >
                  <ContentCard
                    name="Naomi"
                    stars={4.5}
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    “O e-Book é tão gostoso de ler. Parece uma sessão de terapia. Uma conversa profunda e reveladora com a dra. Lea.”
                  </ContentCard>
                </Box>
              </SliderStyled>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Testimonial;
