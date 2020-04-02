import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import md5 from 'crypto-js/md5';
import Clipboard from 'react-clipboard.js';

export default class SocialMetaGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      strMd5: '',
      copySuccess: false,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    const { value } = event.target;
    this.setState({ text: value, strMd5: md5(value).toString() });
  }

  onSuccess() {
    this.setState({ copySuccess: true });
    setTimeout(() => {
      this.setState({ copySuccess: false });
    }, 1500);
  }

  render() {
    return (
      <Form>
        <Row style={{ marginTop: 10 }}>
          <Col>
            <FormGroup>
              <Label for="text">Text</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="Text"
                value={this.state.text}
                onChange={this.handleTextChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="md5">MD5</Label>
              <Input
                type="text"
                placeholder="MD5"
                readOnly
                value={this.state.strMd5}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Clipboard
                className="btn btn-primary"
                data-clipboard-text={this.state.strMd5}
                onSuccess={() => {
                  this.onSuccess();
                }}
              >
                Copy to clipboard
              </Clipboard>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.copySuccess ? (
              <Alert fade={false} color="success">
                Code copied successfully.
              </Alert>
            ) : null}
          </Col>
        </Row>
      </Form>
    );
  }
}
