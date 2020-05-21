import React from 'react'


export const Portfolio = (props) => {
  const {projects} = props
  console.log(props)
  return <h6>{JSON.stringify(projects)}</h6>
}