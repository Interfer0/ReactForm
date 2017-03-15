import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Classes from './routes/myClasses';
import Goals from './routes/Goals';
import Valid from './routes/Valid';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';


//ReactDOM.render((
//  <Top />
//), document.getElementById('topbar'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/Classes" component={Classes} />
    <Route path="/Goals" component={Goals} />
    <Route path="/Forms/Valid" component={Valid} />
  </Router>
), document.getElementById('info'));

