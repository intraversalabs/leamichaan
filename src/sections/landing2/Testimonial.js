import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import { Title, Section, Box, Box3,Text, Title2 } from "../../components/Core";
import { breakpoints } from "../../utils";

import imgC1 from "../../assets/image/jpeg/l1-customer2.jpg";
import imgC2 from "../../assets/image/jpeg/l1-customer3.jpg";


import img5Star from "../../assets/image/png/5star.png";
import img4Star from "../../assets/image/png/4star.png";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";
import Section2 from "../../components/Core/Section2";

const SliderStyled = styled(Slider)`
  .slick-dots {
    position: relative;
    margin-top:10px;
    margin-bottom:10px;
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
  <Box3  height="340px"
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
    <Text variant="small-box" color="dark" mb={4}>
      {children}
    </Text>
    <Box className={`d-flex justify-content-between`}>
      {/* <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box> */}
      <div className="flex-grow-1">
        <Title variant="card-box" mb={0}>
          {name}
        </Title>
        {/* <Text fontSize={2}>{company}</Text> */}
      </div>
    </Box>
  </Box3>
);

const Testimonial = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
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
      <Section2 bg="#DBDAF5">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title2>Depoimentos</Title2>
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
                    name="Larissa"
                    company="CEO at Creativex"
                    image={imgC1}
                  >
                    ???Este e-book ?? um divisor de ??guas para quem est?? sofrendo por causa de um amor.???
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
                    name="Ricardo"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???Obrigado dra. L??a! Mesmo! Voc?? n??o tem no????o de como seu e-book me ajudou a superar minha ex namorada. Estou finalmente seguindo em frente???
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
                    company="CEO at Creativex"
                    image={imgC1}
                  >
                    ???Como Esquecer Um Grande Amor me salvou da depress??o. Juro, n??o tenho palavras para agradecer! Depois do t??rmino do meu ??ltimo relacionamento eu estava no fundo do po??o. N??o conseguia reagir na vida. O livro me mostrou o caminho para a liberdade. E o melhor, descobri que sou capaz de dominar meus sentimentos???.
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
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  
                  >
                    ???Este e-book ?? a b??blia de quem quer esquecer um grande amor.???
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
                    company="CEO at Creativex"
                    image={imgC1}
                    stars={4.8}
                  >
                    ???O e-book ?? extremamente profundo e libertador. Libertador, porque descobri que consigo me libertar da pris??o mental dos pensamentos ruins. Indico este livro para quem quiser aprender a dominar seus pensamentos.??? 
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
                    name="Patr??cia"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???Tudo na vida ?? percep????o, inclusive o sofrimento. O livro da dra. Lea mostra que ao mudar nossa percep????o, temos a chance de transformar sofrimento em oportunidade de crescimento. Este ?? o objetivo maior deste livro: tornar o sofrimento dos leitores em psicologia produtiva. Dou nota mil ao livro da querida Lea!???
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
                    ???O e-Book ?? t??o gostoso de ler. Parece uma sess??o de terapia. Uma conversa profunda e reveladora com a dra. Lea.???
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
                    name="D??bora"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???Como Esquecer Um Grande Amor'' ?? leitura obrigat??ria para qualquer um que queira desenvolver suas habilidades emocionais. Ele ?? libertador e simples de entender.???
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
                    name="Gabriel"
                    stars={4.5}
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???O e-book ?? genial. Al??m de ajudar quem est?? sofrendo por causa de um amor, ele ajuda qualquer um que queira desenvolver habilidades emocionais. A humanidade toda deveria l??-lo. Este mundo seria um lugar melhor.???
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
                    name="Marc"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???O e-Book ???Como Esquecer Um Grande Amor??? ?? mais importante do que qualquer disciplina que tive na escola. Palavra de honra! Para mim, ele ?? um guia psicol??gico que me ensinou a lidar com a rejei????o e com sentimentos negativos. A dra. L??a ?? incr??vel!???.
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
                    name="Renata"
                    company="Digital Marketer, Writer"
                    image={imgC2}
                  >
                    ???J?? sofri muito por amor. Queria ter conhecido este livro na adolesc??ncia. Ele resume em pouco mais de 100 p??ginas, o que demorei anos para aprender.???
                  </ContentCard>
                </Box>
              </SliderStyled>
            </Col>
          </Row>
        </Container>
      </Section2>
    </>
  );
};

export default Testimonial;
