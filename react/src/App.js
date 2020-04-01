import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DuNavBar from './Components/DuNavBar';
import MeuIp from './Components/MeuIp';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Row style={{marginTop: 10}}>
          <Col>
            <DuNavBar/>
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col>
            <MeuIp/>
          </Col>
        </Row>
      </Container>
    );
  }
}