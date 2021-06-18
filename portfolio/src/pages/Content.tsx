import React from 'react';

import About from '../components/About'
import SignUpContainer from '../components/SignUpContainer'

import {
  Switch,
  Route
} from "react-router-dom";

const Content = () => {

  return (
    <main className="content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <SignUpContainer />
        </Route>
      </Switch>
    </main>
  )
}

export default Content;