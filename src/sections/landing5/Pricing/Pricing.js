import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text , Button} from "../../../components/Core";

import PricingTable from "./PricingTable1";



const SectionStyled = styled(Section)`
  position: relative;
`;

const Pricing = () => {
  return (
    <>
    {/* <PricingTable /> */}
      {/* <!-- Pricing section --> */}
      <SectionStyled bg="ash" pt="10px !important" pb="0 !important">
        <Container
          className="position-relative"
          css={`
            z-index: 0;
          `}
        >
          <Row className="justify-content-center">
            <Col md="10" lg="10">
              <div className=" text-center">
                <Title color="#000">Compre o e-book</Title>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <PricingTable />
          
          </div>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Pricing;
