import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardTitle } from 'reactstrap';

import DuNavBar from './Components/DuNavBar';
import MeuIp from './Components/MeuIp';
import Md5 from './Components/Md5';
import Cpf from './Components/Cpf';
import Cnpj from './Components/Cnpj';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <DuNavBar />
        <Row style={{ marginTop: 10 }}>
          <Col xs="12" sm="12" md="6">
            <Card body inverse>
              <CardTitle>
                <h4>Meu IP</h4>
              </CardTitle>
              <MeuIp />
            </Card>
          </Col>
          <Col>
            <Card body inverse>
              <h4>MD5 Generator</h4>
              <Md5 />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col sm="12" md="6">
            <Card body inverse>
              <h4>Gerador de CPF</h4>
              <Cpf />
            </Card>
          </Col>
          <Col>
            <Card body inverse>
              <h4>Gerador de CNPJ</h4>
              <Cnpj />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
