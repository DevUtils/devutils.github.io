import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Input, CustomInput, Button } from 'reactstrap';
import Clipboard from 'react-clipboard.js';
import generateCpf from '../../Libs/cpf';

export default class Cpf extends React.Component {
  constructor(props) {
    super(props);
    this.textCopy = 'Copy to clipboard';
    this.textCopied = 'Text copied successfully.';
    this.state = {
      cpf: '',
      useDots: true,
      textCopy: this.textCopy,
    };

    this.handleGenerateClick = this.generateClick.bind(this);
    this.handleUseDotsClick = this.useDotsClick.bind(this);
  }

  componentDidMount() {
    this.setState({ cpf: generateCpf(this.state.useDots) });
  }

  generateClick() {
    this.setState({ cpf: generateCpf(this.state.useDots) });
  }
  
  useDotsClick(e) {
    var checked = e.target.checked;
    this.setState({ useDots: checked });
    this.setState({ cpf: generateCpf(checked) });
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
              <Input type="text" readOnly value={this.state.cpf} />
            </FormGroup>
          </Col>
          <Col xs="12" md="12" lg="6">
            <FormGroup>
              <CustomInput
                type="switch"
                id="useDots"
                name="useDots"
                label="Pontuação"
                onChange={this.handleUseDotsClick} checked={this.state.useDots}
              />
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
      </Form>
    );
  }
}
