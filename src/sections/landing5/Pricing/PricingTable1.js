import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { Text, Box, Button, InputGroup } from "../../../components/Core";

const PricingCard = styled.div`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  min-height: 430px;
  background-color: #fff;
  text-align: center;
  padding-top: 45px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  .pre-title {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .post-title {
    color: #696871;
    display: inline-block;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 28px;
    margin-bottom: 22px;
  }
  .title {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -1.03px;
    line-height: 56px;
    margin-bottom: 30px;
  }
`;

function MyVerticallyCenteredModal(props) {
  // return (
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Modal heading
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <h4>Centered Modal</h4>
    //     <p>
    //       Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //       dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //       consectetur ac, vestibulum at eros.
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
  // );
}

const Pricing = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg="4" md="6" sm="8" className="mt-4">
          {/* <PricingCard>
            <span className="pre-title">Limited</span>
            <h2 className="title mb-4">Free</h2>
            <Text color="dark">
              Get a free chapter of our<br className="d-none d-sm-block"></br>{" "}
              book right now.
            </Text>
            <Box className="pt-4">
              <InputGroup
                placeholder="Email Address"
                className="text-center"
                css={`
                  background: #f7f7fb;
                  padding: 1rem 1.75rem;
                `}
              />
            </Box>
            <Box className="mt-auto">
              <Button width="100%" bg="secondary">
                Send free chapter
              </Button>
            </Box>
          </PricingCard> */}
        </Col>
        <Col lg="4" md="6" sm="8" className="mt-4">
          <PricingCard>
            <span className="pre-title">Only eBook</span>
            <h2 className="title mb-2">R$29</h2>
            <span className="post-title  mb-4">One time purchase</span>
            <Text color="dark">
              Get the eBook version +<br className="d-none d-sm-block"></br>{" "}
              Audio version of the book.
            </Text>
            <Box className="mt-auto">
              {/* <Button background="#FF5C39" bg="#FF5C39" width="100%" onClick={() => setModalShow(true)}>Compre agora</Button> */}
            </Box>
          </PricingCard>
          {/* <MyVerticallyCenteredModal
         show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
        </Col>
        <Col lg="4" md="6" sm="8" className="mt-4">
          {/* <PricingCard>
            <span className="pre-title">Only eBook</span>
            <h2 className="title mb-2">$49</h2>
            <span className="post-title  mb-4">One time purchase</span>
            <Text color="dark">
              Hardcover + eBook version +<br className="d-none d-sm-block"></br>{" "}
              Audio version of the book.
            </Text>
            <Box className="mt-auto">
              <Button width="100%">Buy from Amazon</Button>
            </Box>
          </PricingCard> */}
        </Col>
      </Row>
    </>
  );
};

export default Pricing;
