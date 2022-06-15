import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Section from "../components/Section";
import PageWrapper from "../components/PageWrapper";

import imgIcon from "../assets/image/png/thumbs-shape.png";
import { Title, Button, Text, Box, Badge } from "../components/Core";

import iconQuote from "../assets/image/png/quote-icon.png";

import img06 from "../assets/image/png/562.png";
import Section2 from "../components/Section2";




const Post = styled(Box)`
  overflow: hidden;
  font-size: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.heading} !important;
  }
  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  blockquote {
    margin-bottom: 1.25rem;
    padding-left: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 20px;
    &::after {
      content: url(${iconQuote});
      display: inline-block;
      min-width: 28px;
      max-width: 28px;
      margin-top: 8px;
      margin-right: 23px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img,
  iframe,
  video {
    max-width: 100%;
    margin-bottom: 2rem;
    display: block;
  }
`;

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  // background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const ButtonStyled = styled.button`
  min-width: 250px;
  min-height: 60px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.4s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: none;
    outline: none;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <PageWrapper>
        <Section2 >
          <div className="pt-5"></div>
          <Container >
            <div className="text-center">
              <ContentIcon>
                <img src={img06} alt="" className="img-fluid" />
              </ContentIcon>
              
                <Title variant="hero">Agora é o seu momento de ser feliz!</Title>
            </div>
            <div>    
                <Post>
                  <br></br>
                  <div>
                    <p>
                    Este e-book irá te ajudar, não só a aliviar o sofrimento e superar o amor que te faz sofrer, mas também vai te proporcionar mais meios e conhecimentos para viver uma vida melhor, mais gratificante e com mais segurança emocional.
                    </p>
                    <p>
                    Você merece ser uma pessoa livre, sem prisões mentais, e segura de si e de seus sentimentos. Para isso, é necessário conhecer o funcionamento da sua mente, aprender a dominar seus pensamentos tóxicos e desenvolver a habilidade emocional de ser amiga de si mesma.
                    </p>
                    <p>
                    Foi para isso que escrevi este e-book. Foi a forma que encontrei para expandir as paredes do meu consultório e chegar até você, que está sofrendo por causa de um amor e não sabe como lidar com a situação.
                    </p>
                  </div>
                  <div className="text-center">
                  <h3>Você merece ser feliz.</h3>
                  <br></br>
                  <br></br>
                  </div>
              </Post>
              
              <div className="text-center">
                <Link href="/">
                  <a>
                  <Button  mb={2}>Volte a Home</Button>
                    
                  </a>
                </Link>
              </div>
            </div>
            
          </Container>
        </Section2>
      </PageWrapper>
    </>
  );
};

export default NotFoundPage;
