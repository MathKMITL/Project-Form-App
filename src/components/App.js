import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login'
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} /> {/* exact เป็นการกันการชนของ path */}
          <Route exact path='/main' component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
