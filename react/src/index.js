import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.darkly.min.css';
import './index.css';
import App from './App';
import SocialMetaGenerator from './Components/SocialMetaGenerator';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/social-meta" component={SocialMetaGenerator} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
