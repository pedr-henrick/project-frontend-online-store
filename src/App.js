import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho ';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route patch="/carrinho" component={ Carrinho } />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
