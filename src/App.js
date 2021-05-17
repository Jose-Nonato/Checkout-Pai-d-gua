import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import Start from '../src/components/Start/Start';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
