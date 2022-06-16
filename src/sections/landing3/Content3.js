import  React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../components/Core";

import imgContent from "../../assets/image/png/Artboard2.png";

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import img06 from "../../assets/image/png/562.png";


// import PricingCard from "../../sections/pricing/PricingTable1";

const SectionStyled = styled(Section)`
  // border-bottom: 1px solid #242427;
`;





const Content3 = () => {

  const axios = require('axios').default;

  const userRef = useRef();

  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const headers = { 
          'Content-Type': 'application/json',
          'Authorization': 'Basic MjRlZjg0ZWEtZDEzZC00ZGFkLThmMTItMTViOGJkMjExYzZjOmM4YzlkNmZlLTliZDktNGRjZC04OWIwLTg1MDNkMjZiYTZhZg=='
        }
        const response = await axios.post(
            "https://api.leamichaan.com/ebook/api/create-link?name=" + name + "&email=" + email, "",
            {
                headers: headers
            }
        );
        
        console.log(JSON.stringify(response?.data.message));
        window.location.replace(response?.data.message);
        // console.log(JSON.stringify(response));
        // const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;
        // setAuth({ user, pwd, roles, accessToken });
        // console.log(email);
        // console.log(name);
        setShow(false)
        setEmail('');
        setName('');
        setSuccess(true);
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        console.log(err);
    }
}

  return (
  <>
    <SectionStyled bg="light">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <div>
              <div
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgContent} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Title color="dark">
              15 dias de Garantia com 100% do seu dinheiro de volta
              </Title>
              <Text color="darkShade">
              Compre o e-book e ganhe 15 dias para ler com calma. Se em até 15 dias não sentir que o e-book te ajudou, entre em contato conosco no email: xxxxx@xxxxxxx.com e solicite o reembolso do valor investido. Devolveremos 100% do seu dinheiro. 
              </Text>
              <div className="mt-5">
                <Button onClick={handleShow} >Quero experimentar agora</Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
            
                   <Container>
                      <Row>
                        <Col xs="12" className="mb-5">
                          <div className="text-center">
                          <Title variant="card" fontSize="16px">Preencha as informações abaixo para seguir com a compra do e-book. Pode ficar tranquilo, suas informações são totalmente confidenciais.</Title>
                          </div>
                        </Col>
                          <Col lg="1" className="pr-lg-5">
                        
                        </Col>
                        <Col lg="5" className="offset-lg-1 mb-4 mb-lg-0">
                          {/* <Author> */}
                            <img width="100%" src={img06} alt="Book" />
                          {/* </Author> */}
                        </Col>
                        {/* <Col lg="1" className="pr-lg-5">
                        
                        </Col> */}
                        <Col lg="2" className="pr-lg-5">
                          <div className="author-text">
                            <Text variant="price" my={4}>
                            Por R$29,90
                            </Text>
                      
                          </div>
                        </Col>
                         
                      </Row>
                    </Container>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                         type="email"
                         autoComplete="off"
                         onChange={(e) => setEmail(e.target.value)}
                         value={email}
                         required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control
                         type="text"
                         autoComplete="off"
                         onChange={(e) => setName(e.target.value)}
                         value={name}
                         required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleSubmit}>
                    Comprar
                  </Button>
                </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
  );
}
  


export default Content3;
