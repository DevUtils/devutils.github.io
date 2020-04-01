import React from "react";
import { Container, Row, Col } from "reactstrap";
import DuNavBar from "../DuNavBar";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class SocialMetaGenerator extends React.Component {
  render() {
    return (
      <Container>
        <DuNavBar />
        <Row style={{ marginTop: 10 }}>
          <Col>
            <Form>
              <FormGroup>
                <Label for="frTitle">Título</Label>
                <Input
                  type="text"
                  name="text"
                  id="frTitle"
                  placeholder="Título"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
