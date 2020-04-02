import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Input, Alert, Button } from 'reactstrap';
import Clipboard from 'react-clipboard.js';
import generateCnpj from '../../Libs/cnpj';

export default class Cnpj extends React.Component {
  constructor(props) {
    super(props);
    this.textCopy = 'Copy to clipboard';
    this.textCopied = 'Text copied successfully.';
    this.state = {
      cnpj: '',
      textCopy: this.textCopy,
    };

    this.handleGenerateClick = this.generateClick.bind(this);
  }

  componentDidMount() {
    this.setState({ cnpj: generateCnpj(true) });
  }

  generateClick() {
    this.setState({ cnpj: generateCnpj(true) });
  }

  onSuccess() {
    this.setState({ textCopy: this.textCopied });
    setTimeout(() => {
      this.setState({ textCopy: this.textCopy });
    }, 2000);
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
              <Input type="text" readOnly value={this.state.cnpj} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Clipboard
                className="btn-block btn btn-primary"
                data-clipboard-text={this.state.cnpj}
                onSuccess={() => {
                  this.onSuccess();
                }}
              >
                {this.state.textCopy}
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
