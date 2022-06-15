import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, List } from "../components/Core";
import Section2 from "../components/Section2";

const TermsConditions = () => {
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
                  Privacidade
                </Title>
                <br></br>
                <Text variant="medium">
                A sua privacidade é importante para nós. É política do leamichaan.com respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site. 
                </Text>
                <br></br>
                <Text variant="medium">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos por meios justos e legais, com o seu conhecimento e consentimento. Também informamos porque estamos coletando os dados e como serão usados.  
                </Text>
                <br></br>
                <Text variant="medium">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou                        modificação não autorizados.
                </Text>
                <br></br>
                <Text variant="medium">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </Text>
                <br></br>
                <Text variant="medium">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas.
                </Text>
                <br></br>
                <Text variant="medium">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas.
                </Text>
    

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="1.2rem" mb="30px">
                  Política de Cookies leamichaan.com:
                  </Title>
                  <Text variant="medium">
                  Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. 
                  </Text>
                  <Text variant="medium">
                  Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo                            você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente. Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.

                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section2>
      </PageWrapper>
    </>
  );
};
export default TermsConditions;
