import  React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { ModalProvider, ModalConsumer, ModalRoot} from '@trendmicro/react-modal';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
// import { useNavigate } from 'react-router-dom';

import { Text, Box, Button, InputGroup } from "../../../components/Core";

const PricingCard = styled.div`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  // min-height: 430px;
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


const Pricing = () => {

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
      <Row className="justify-content-center">
        <Col lg="4" md="6" sm="8" className="mt-4">
        </Col>
        <Col lg="4" md="6" sm="8" className="mt-4">
          <PricingCard>
            <span className="pre-title">Lea Michaan Ebook</span>
            <h2 className="title mb-2">R$29</h2>
            <span className="post-title  mb-4">Compra Única</span>
            {/* <Text color="dark">
              Get the eBook version +<br className="d-none d-sm-block"></br>{" "}
            </Text> */}
            <Box className="mt-auto">
              <Button background="#FF5C39" bg="#FF5C39" width="80%" onClick={handleShow}>Compre agora</Button>
            {/* </Box> */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Informe seus dados</Modal.Title>
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
                  <Button variant="secondary" onClick={handleSubmit}>
                    Voltar
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Comprar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Box>
          </PricingCard>
        </Col>
        <Col lg="4" md="6" sm="8" className="mt-4">
        </Col>
      </Row>
    </>
  );
};


export default Pricing;
