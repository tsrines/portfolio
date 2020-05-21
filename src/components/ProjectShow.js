import React from 'react'

export const ProjectShow = (props) => {
  const {project} = props
  console.log(project)
return <h1>You are at: {project.name}</h1>
    // // <div>
    //   {console.log(JSON.stringify(...props))}
    //   <div>Hi
    //  </div>
  
  }

