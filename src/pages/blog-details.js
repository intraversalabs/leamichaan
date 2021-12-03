import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";
import Section2 from "../components/Core/Section2";

const BlogDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section2 className="pb-0">
          
          <Container>
            <Row className="justify-content-initial text-initial">
            <Col lg="2" className="mb-5"></Col>
              <Col lg="8">
                <Title variant="hero">
                  Supere o amor que{" "}
                    te faz sofrer.
                </Title>
              </Col>
            </Row>
          </Container>
        </Section2>
        <Section2 >
          <Container>
            <Row>
            <Col lg="2" className="mb-5"></Col>
              <Col lg="8" className="mb-5">
                <PostDetails />
              </Col>
              {/* <Col lg="4" className="">
                <Sidebar />
              </Col> */}
            </Row>
          </Container>
        </Section2>
      </PageWrapper>
    </>
  );
};
export default BlogDetails;
