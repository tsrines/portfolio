import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { projects } from './resources/projects';
import Picture from './components/picture';
import { ProjectShow } from './components/ProjectShow';

import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='App'>
      <Router basename='/'>
        <Switch>
          {projects.map((project) => (
            <Route
              key={project.id}
              exact
              path={`/${project.slug}`}
              render={(props) => (
                <ProjectShow exact {...props} project={project} />
              )}
            />
          ))}
          <Route
            exact
            path='/aboutme'
            render={(props) => <AboutMe {...props} />}
          />
          <Route
            exact
            path='/'
            render={(props) => (
              <Picture history {...props} projects={projects} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
