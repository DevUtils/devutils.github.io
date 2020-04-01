import React from 'react';
import { Card, CardTitle, CardText, CardColumns } from 'reactstrap';
import axios from 'axios';

export default class MeuIp extends React.Component {
  constructor(props){
    super(props);
    this.state = {'ip': 'Carregando...'};
  }

  componentDidMount() {
    this.getIp();
  }

  getIp() {
    axios.get(`https://api.ipify.org/?format=json`)
      .then(res => {
        const data = res.data;
        const {ip} = data;
        this.setState({ ip });
      })
  }

  render() {
    const {ip} = this.state;
    return (
      <CardColumns>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Meu IP:</CardTitle>
          <CardText>{ip}</CardText>
        </Card>
      </CardColumns>
    );
  }
}