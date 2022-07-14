import React from "react";
import styled from "styled-components";

import { Box, Badge } from "../../components/Core";

import imgB1 from "../../assets/image/jpeg/blog-details-img-1.jpg";
import iconQuote from "../../assets/image/png/quote-icon.png";

const Post = styled(Box)`
  overflow: hidden;
  font-size: 1rem;

  h3 {
    font-size: 1.7rem;
    margin-bottom: 1.26rem;
    color: #F03F37 !important;
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
    color: #F03F37 !important;
    font-size: 25px;
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

const BadgePost = ({ children }) => (
  <Badge
    mr={3}
    mb={3}
    bg="#eae9f2"
    color="#696871"
    fontSize="16px"
    px={3}
    py={2}
  >
    {children}
  </Badge>
);

const PostDetails = () => (
  <>
    {/* <!-- Blog section --> */}
    <Post>
      <div>
        <p>
          Prezado leitor que está sofrendo por amor, 
        </p>
        <p>
        Sou psicóloga há mais de vinte anos e meu objetivo, desde que escolhi a profissão, sempre foi de ajudar as pessoas a lidarem com o sofrimento emocional. 
        </p>
        <p>
        Este sofrimento é muitas vezes subestimado, pois, diferente das lesões físicas, não aparenta existir, não causa ferimentos visíveis, nem sangramentos ou hematomas nas vítimas. 
        </p>
        <blockquote>No entanto, mesmo sendo um vilão silencioso, a dor emocional é REAL e causa consequências REAIS no corpo, na mente e na vida das pessoas.</blockquote>
        <p>
        A minha especialidade é cuidar do sofrimento emocional das pessoas e ajudá-las a resolver situações difíceis da vida. 
        </p>
        {/* <blockquote>
          You can develop side-businesses, side-hustles, and hobbies that can
          supplement your 9–5 income source, and they can all put extra money in
          your pocket that allows you to work less and not stress so much about
          bills.
        </blockquote> */}
        <p>
        Durante minha carreira, percebi que uma das situações mais comuns, dolorosas e cruéis que acometiam meus pacientes era quando não podiam viver um amor. 
        </p>
        <p>
        A dor que um ser humano sente quando está lidando com a perda de um amor, seja por causa de um término de relacionamento, ou um amor não correspondido, é uma das mais intensas e paralisantes que existe no universo psíquico.
        </p>
        <p>
        É uma dor que influencia todos os aspectos da vida das pessoas, podendo causar crises de ansiedade e depressão, e impactar não só a qualidade de vida, como também a performance profissional e as relações afetivas com familiares e amigos. 
        </p>
        <p>
        Sim, o sofrimento amoroso é um sentimento sério que causa consequências sérias na vida das pessoas.
        </p>
        <blockquote>Mas ele esconde uma oportunidade maravilhosa.</blockquote>
        <p>
        Quando lidamos com as dores de amor de forma madura e inteligente, podemos usar a intensidade do sofrimento a nosso favor e em prol do nosso desenvolvimento. Podemos transformar os sentimentos negativos em impulsos positivos, alavancando nosso estado psíquico e, consequentemente, melhorando nossa qualidade de vida.
        </p>
        <p>
        Os objetivos do meu livro são os seguintes: eliminar os pensamentos tristes que te assolam, acabar com a tua dor emocional e te ensinar a usar sua mente e seus pensamentos para o seu BEM ESTAR e DESENVOLVIMENTO.
        </p>
        <p>
        Este e-book irá te ajudar, não só a aliviar o sofrimento e superar o amor que te faz sofrer, mas também vai te proporcionar mais meios e conhecimentos para viver uma vida melhor, mais gratificante e com mais segurança emocional. 
        </p>
        <p>
        Você merece ser uma pessoa livre, sem prisões mentais, e segura de si e de seus sentimentos. Para isso, é necessário conhecer o funcionamento da sua mente, aprender a dominar seus pensamentos tóxicos e desenvolver a habilidade emocional de ser amiga de si mesma. 
        </p>
        <p>
        Foi para isso que escrevi este e-book. Foi a forma que encontrei para expandir as paredes do meu consultório e chegar até você, que está sofrendo por causa de um amor e não sabe como lidar com a situação.   
        </p>
        <p>
        Já atendi centenas de pacientes que chegaram ao meu consultório com um buraco no coração e que estavam sofrendo muito por causa de amor. Todos saíam das consultas mais aliviados e com mais ferramentas mentais para dominar os sentimentos negativos e superar o amor que os fazia sofrer.
        </p>
        <blockquote>Toda minha experiência e meu conhecimento sobre este assunto foram detalhadas neste e-book.</blockquote>
        <p>
        Estou muito certa de que você vai aprender bastante com o que tenho para compartilhar. Inclusive, para demonstrar o quanto acredito que o e-book irá te ajudar, estou dando 15 dias de Garantia com 100% do seu dinheiro de volta.  
        </p>
        <p>
        Ou seja, você compra o e-book e ganha 15 dias para ler com calma. Se ao final destes 15 dias não sentir que o e-book te ajudou, devolverei 100% do seu dinheiro.
        </p>
        <p>
        O livro vai te ensinar a ter mais domínio sobre a sua mente, para que você não seja escravo dos pensamentos e sentimentos negativos que te assolam. Os pensamentos tóxicos, relacionados ao amor, causam sentimentos tóxicos, como ciúmes, rejeição, inveja, ódio, raiva e ansiedade. Estes sentimentos nos fazem mal. Mas podemos controlá-los com o uso inteligente da mente.
        </p>
        <blockquote>Pode parecer que nossos pensamentos estão fora do nosso controle, mas a verdade é que você tem a capacidade de dominar seus pensamentos, principalmente aqueles que te fazem sofrer.</blockquote>
        <p>
        As pessoas acreditam que são reféns de suas mentes e de seus sentimentos. E isso é verdade até certo ponto. Realmente somos condicionados a permitir que nossa mente esteja fora de nosso domínio. Crescemos com esta crença: nossa mente está fora de nosso controle. 
        </p>
        <p>
        Mas não precisamos viver com nossa mente no piloto automático. Na verdade, não devemos. É fundamental aprendermos a observar nosso fluxo de pensamentos e discernir entre aqueles que nos fazem bem e aqueles que nos intoxicam. 
        </p>
        <p>
        Quando começamos a observar nosso fluxo mental, podemos identificar os pensamentos, as imagens e as ideias que nossa mente gera e depois as emoções que sentimos. Assim, fica claro quais são os pensamentos que causam sentimentos negativos e positivos.  
        </p>
        <p>
        Uma vez que você identifica quais pensamentos que te fazem mal, você pode começar a monitorá-los de perto e realizar um esforço pró ativo para pensar em outras coisas e se ocupar com atividades produtivas. 
        </p>
        <p>
        Desta forma, cada vez que um pensamento negativo entra em cena, você vai condicionar sua mente a trabalhar contra este pensamento, até que sua mente, automaticamente, vai evitá-lo, antes mesmo de você tomar consciência dele. 
        </p>
        <p>
        Este tipo de inteligência emocional é raro e demanda esforço para adquirir. Mas é extremamente poderoso e transforma a vida das pessoas. Quando você tem a capacidade de dominar os pensamentos negativos, você se torna uma pessoa mais segura, livre e independente emocionalmente. E, claro, sofre muito menos.
        </p>
        <blockquote>É o caminho mais eficaz para ser uma pessoa mais plena.</blockquote>
        <p>Enfim, te convido a ler o e-book e começar a aprender tudo sobre como superar alguém, dominar sua mente e ser mais companheira de si.</p>
        <p>Um grande beijo e boa leitura!</p>
        <p>Léa Michaan</p>
      </div>
    </Post>
  </>
);

export default PostDetails;
