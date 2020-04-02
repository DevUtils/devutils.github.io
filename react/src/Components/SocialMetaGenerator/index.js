import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DuNavBar from '../DuNavBar';
import Clipboard from 'react-clipboard.js';

export default class SocialMetaGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.textCopy = 'Copy to clipboard';
    this.textCopied = 'Text copied successfully.';
    this.state = {
      code: '',
      textCopy: this.textCopy,
      title: '',
      image: '',
      description: '',
      type: '',
      url: '',
      keywords: '',
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSuccess() {
    this.setState({ textCopy: this.textCopied });
    setTimeout(() => {
      this.setState({ textCopy: this.textCopy });
    }, 2000);
  }

  getCode() {
    const { title, image, description, type, url, keywords } = this.state;
    return `<!-- HTML -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">

<!-- FACEBOOK -->
<meta property="og:title" content="${title}">
<meta property="og:image" content="${image}">

<meta property="og:type" content="${type}">
<meta property="og:url" content="${url}">
<meta property="og:description" content="${description}">

<!-- GOOGLE PLUS -->
<meta itemprop="name" content="${title}">
<meta itemprop="image" content="${image}">
<meta itemprop="url" content="${url}">
<meta itemprop="description" content="${description}">

<!-- TWITTER -->
<meta name="twitter:title" content="${title}">
<meta name="twitter:image:src" content="${image}">
<meta name="twitter:site" content="${url}">
<meta name="twitter:description" content="${description}">`;
  }

  render() {
    const code = this.getCode();
    return (
      <Container>
        <DuNavBar />
        <Form>
          <Row style={{ marginTop: 10 }}>
            <Col>
              <FormGroup>
                <Label for="title">Title/Name</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title/Name"
                  value={this.state.title}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="Type"
                  value={this.state.type}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="url">URL</Label>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="URL"
                  value={this.state.url}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="keywords">Keywords</Label>
                <Input
                  type="text"
                  name="keywords"
                  id="keywords"
                  placeholder="Keywords"
                  value={this.state.keywords}
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Clipboard
                  className="btn btn-primary"
                  data-clipboard-text={code}
                  onSuccess={() => {
                    this.onSuccess();
                  }}
                >
                  {this.state.textCopy}
                </Clipboard>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <SyntaxHighlighter
                language="html"
                style={atelierForestDark}
                wrapLines={false}
                showLineNumbers={true}
              >
                {code}
              </SyntaxHighlighter>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
