import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { projects } from './resources/projects';

import { ProjectShow } from './components/ProjectShow';

import './App.css';
import AboutMe from './components/AboutMe';


import Main from './components/Main';
import { createTheme, ThemeProvider } from '@material-ui/core';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router basename="/">
        <Switch>
          {projects.map(project => (
            <Route
              key={project.id}
              exact
              path={`/${project.slug}`}
              render={props => (
                <ProjectShow exact {...props} project={project} />
              )}
            />
          ))}
          <Route
            exact
            path="/aboutme"
            render={props => <AboutMe {...props} />}
          />

          <Route
            exact
            path="/"
            render={props => <Main history {...props} projects={projects} />}
          />
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
