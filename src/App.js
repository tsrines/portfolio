import React, { Fragment } from 'react';
import { Link, Switch, Route, Path } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { ButtonAppBar } from './components/nav'
import { Picture } from './components/picture'
import './App.css'  






function App() {  
  return (
    <div>

      <Picture />

    </div>
  );
}

export default App;
