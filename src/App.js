import React, { Fragment } from 'react';
import { Link, Switch, Route, Path } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { ButtonAppBar } from './components/nav'
import { Picture } from './components/picture'





function App() {  
  return (
    <Fragment>
      {/* <ButtonAppBar /> */}
      <Picture />
      <h1>Hello</h1>
    </Fragment>
  );
}

export default App;
