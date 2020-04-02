import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Input, Alert, Button } from 'reactstrap';
import Clipboard from 'react-clipboard.js';
import generateCpf from '../../Libs/cpf';

export default class Cpf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      copySuccess: false,
    };

    this.handleGenerateClick = this.generateClick.bind(this);
  }

  componentDidMount() {
    this.setState({ cpf: generateCpf(true) });
  }

  generateClick() {
    this.setState({ cpf: generateCpf(true) });
  }

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <small>
              A ferramenta abaixo tem o objetivo de auxiliar desenvolvedores de
              softwares a testarem em seu ambiente de desenvolvimento. A má
              utilização desse conteúdo é de total responsabilidade do
              visitante. Não possuímos vínculos com a Receita Federal.
            </small>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Input type="text" readOnly value={this.state.cpf} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Clipboard
                className="btn-block btn btn-primary"
                data-clipboard-text={this.state.cpf}
                onSuccess={() => {
                  this.onSuccess();
                }}
              >
                Copy to clipboard
              </Clipboard>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Button block color="success" onClick={this.handleGenerateClick}>
                Gerar novo número
              </Button>
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