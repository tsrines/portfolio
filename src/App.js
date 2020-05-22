import React from 'react';
import { Switch, Route} from 'react-router'
import { HashRouter as Router } from 'react-router-dom'
import { projects } from './resources/projects'
import { Picture } from './components/picture'
import {ProjectShow} from './components/ProjectShow'
import {Portfolio} from './components/Portfolio'


import './App.css'

function App() {
  return (
    <div className="App">
      <Router basename='/' >
        <Switch>
          <Route exact path='/'render={(props)=> <Picture {...props} projects={projects}/>}/>
          <Route exact path='/portfolio' render={(props)=> <Portfolio {...props} projects={projects}/>}/>
          {projects.map(project => {
                return <Route key={project.id} 
                exact path = {`/${project.slug}`} 
                render={ (props) =>
                <ProjectShow {...props}
                project={project} />} 
                />
            })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;










