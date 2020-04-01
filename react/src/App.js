import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DuNavBar from './Components/DuNavBar';
import Home from './Components/Home';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

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
            <Home/>
          </Col>
        </Row>
      </Container>
    );
  }
}