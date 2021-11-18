import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import img01 from "../../assets/image/svg/icones-03.svg";
import img02 from "../../assets/image/svg/icones-02.svg";
import img03 from "../../assets/image/svg/icones-05.svg";
import img04 from "../../assets/image/svg/icones-04.svg";
import img05 from "../../assets/image/svg/icones-01.svg";

import { Title, Title2, Section, Box, Text } from "../../components/Core";

const ContentCard = ({
  color = "#fff",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    size="100%"
    width="100%"
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    // css={`
    //    margin-left="200px"
    // `}
  >
    <Box
      size={85}
      minWidth={85}
      borderRadius="50%"
      color="#DBDAF5"
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        color: #DBDAF5;
      `}
      mr={3}
    >
      <img src={iconName}></img>
    </Box>
    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const Feature2 = () => (
  <>
    <Section >
        {/* <Container>
       
        </Container> */}
      <Container>
      <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
                <div>
                  <div id="title2"><Title2>
                  Se você está sofrendo por causa de um amor{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" /> e quer
                  se libertar disso, este e-book é para você.
                </Title2></div>
                
                <Text>
                  Você terá em mãos um guia prático de como esquecer um amor e se tornar mais independente emocionalmente.
                </Text>
                {/* <WidgetContainer mt={5}>
                  <Widget title="Domine seus sentimentos" mb={4}></Widget>
                  <Widget title="Alivie sua dor"mb={4}></Widget>
                  <Widget title="Liberte-se dos pensamentos que te fazem sofrer"mb={4}></Widget>
                  <Widget title="Desenvolva independência emocional"mb={4}></Widget>
                  <Widget title="15 dias de garantia com 100% do seu dinheiro de volta"mb={4}></Widget>
                </WidgetContainer> */}
                  {/* <div className="mt-4">
                  <ContentCard
                    title="Domine seus sentimentos"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                  </ContentCard>
                  <ContentCard
                    title="Alivie sua dor"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                  </ContentCard>
                  <ContentCard
                    title="Liberte-se dos pensamentos que"
                    title2="te fazem sofrer"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                  </ContentCard>
                  <ContentCard
                    title="Desenvolva independência emocional"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                  </ContentCard>
                  <ContentCard
                    title="15 dias de garantia com 100% do seu dinheiro"
                    title2="de volta"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                  </ContentCard>
                </div> */}
              </div>
              {/* </div> */}
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
               {/* <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              > */}
              {/* <iframe src="https://player.vimeo.com/video/593357178?h=a0cf868b9e" width="100%" height="100%" allow="autoplay; fullscreen; picture-in-picture"></iframe> */}
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/JZwmJKh0V8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* </div> */}
            </Col>

            
            
          </Row>
        {/* <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title color="light">
                It’s everything
                <br />
                you’ll ever need.
              </Title>
            </Box>
          </Col>
        </Row> */}
        <br></br>
        <br></br>
        <br></br>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Domine seus sentimentos"
              color="primary"
              iconName={img01}
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Alivie sua dor"
              color="secondary"
              iconName={img02}
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Liberte-se dos pensamentos que te fazem sofrer"
              color="warning"
              iconName={img03}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Desenvolva independência emocional"
              color="secondary"
              iconName={img04}
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="15 dias de garantia com 100% do seu dinheiro de volta"
              color="primary"
              iconName={img05}
            />
          </Col>
        </Row>
        {/* <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Rich Documentation"
              color="secondary"
              iconName="icon-bookmark-2-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Humanly Support"
              color="success"
              iconName="icon-voice-recognition-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Lifetime Updates"
              color="primary"
              iconName="icon-infinite"
            />
          </Col>
        </Row> */}
      </Container>
    </Section>
  </>
);

export default Feature2;
