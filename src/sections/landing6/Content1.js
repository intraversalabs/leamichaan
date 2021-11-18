import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/l7-mobile.png";
import { device } from "../../utils";

const SectionStyled = styled(Section)``;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;
const ContainerImg = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div.video {
    content: '';
    max-width: 595px;
    width: 100%;
    max-height: 347px;
    height: 100%;

    background: #e5e5e5;
  }

  @media (max-width: 1244px) {
    margin-left: 3rem;
  }

  @media (max-width: 928px) {
    margin-left: 0;

    min-height: 348px;

    align-items: flex-start;
    justify-content: flex-start;

    div.video {
      max-width: 100%;
      width: 100%;
      height: 348px;
    }
  }

  @media (max-width: 490px) {
    min-height: 210px;

    div.video {
      height: 210px;
    }
  }
`;

const WidgetStyled = styled(Box)`
  padding-left: 70px;
  position: relative;
  max-width: 411px;
  &:before {
    counter-increment: widget-counter;
    content: counter(widget-counter);
    position: absolute;
    left: 0;
    min-width: 32px;
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 500px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  title2,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Title variant="card" mb={0}>
        {title}<br></br>{title2}
      </Title>

      <Text>{children}</Text>
    </div>
  </Box>
);


const Widget = ({ num = 1, title = "", children = "", ...rest }) => {
  return (
    <WidgetStyled {...rest}>
      <Title variant="card" mb={2}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Content1 = () => {
  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
                <div>
                <Title>
                  Se você está sofrendo por causa de um amor{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" /> e quer
                  se libertar disso, este e-book é para você.
                </Title>
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
              <iframe width="450px" height="400px"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
              {/* </div> */}
            </Col>

            
            
          </Row>
        </Container>
        <Container>
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
              title="50+ Unique Design Blocks"
              color="primary"
              iconName="icon-cards-2"
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
              title="Multiple Layouts"
              color="secondary"
              iconName="icon-layout-11"
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
              title="Mobile First Design"
              color="warning"
              iconName="icon-phone-charging-3-2"
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
              title="Fully Responsive"
              color="secondary"
              iconName="icon-sidebar-2"
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
              title="Bootstrap 4 Framework"
              color="primary"
              iconName="icon-grid-45"
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
      </SectionStyled>
    </>
  );
};

export default Content1;
