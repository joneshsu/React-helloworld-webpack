import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About/About';
import User from './components/User';
import Contacts from './components/Contacts';
import Practice from './components/Practice';
import TodoList from './components/TodoList';

/*
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('app')
);
*/

const routers = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="repos/:name" component={Repos} />
    <Route path="about" component={About} />
    <Route path="/user" component={User} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/practices" component={Practice} />
    <Route path="/TodoList" component={TodoList} />
  </Route>
);

ReactDOM.render(<Router routes={routers} history={hashHistory} />, document.getElementById('app'));
