import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DuNavBar from './Components/DuNavBar';
import MeuIp from './Components/MeuIp';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <DuNavBar/>
        <Row style={{marginTop: 10}}>
          <Col>
            <MeuIp/>
          </Col>
        </Row>
      </Container>
    );
  }
}