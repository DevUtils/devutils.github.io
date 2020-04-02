import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Input, Alert, Button, CustomInput } from 'reactstrap';
import Clipboard from 'react-clipboard.js';
import generateCnpj from '../../Libs/cnpj';

export default class Cnpj extends React.Component {
  constructor(props) {
    super(props);
    this.textCopy = 'Copy to clipboard';
    this.textCopied = 'Text copied successfully.';
    this.state = {
      cnpj: '',
      useCnpjDots: true,
      textCopy: this.textCopy,
    };

    this.handleGenerateClick = this.generateClick.bind(this);
    this.handleUseCnpjDotsClick = this.useCnpjDotsClick.bind(this);
  }

  componentDidMount() {
    this.setState({ cnpj: generateCnpj(this.state.useCnpjDots) });
  }

  generateClick() {
    this.setState({ cnpj: generateCnpj(this.state.useCnpjDots) });
  }

  useCnpjDotsClick(e) {
    var checked = e.target.checked;
    this.setState({ useCnpjDots: checked });
    this.setState({ cnpj: generateCnpj(checked) });
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
          <Col xs="12" md="12" lg="6">
            <FormGroup>
              <CustomInput
                type="switch"
                id="useCnpjDots"
                name="useCnpjDots"
                label="Pontuação"
                onChange={this.handleUseCnpjDotsClick}
                checked={this.state.useCnpjDots}
              />
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
