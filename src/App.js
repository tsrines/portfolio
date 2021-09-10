import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { projects } from './resources/projects';

import { ProjectShow } from './components/ProjectShow';

import './App.css';
import AboutMe from './components/AboutMe';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import Main from './components/Main';
import AdSlot320x50 from './components/AdSlot320x50';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
        <AdSlot320x50 />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
