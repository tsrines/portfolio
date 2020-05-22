import React from 'react'
import { Dropdown } from 'semantic-ui-react'
const DropdownExampleInline = (props) => {
  const {projects, history} = props
  const options = []
  projects.forEach(project => {
    let optionHash = {}
    optionHash.key = project.name
    optionHash.text = project.name
    optionHash.value = project.name
    optionHash.onClick = (e,data) => history.push(`/${project.slug}`)
    optionHash.image = { avatar: true, src: project.image.imageURL}
    options.push(optionHash)
  })

  return (
    <span className='span'>
        <Dropdown
          inline
          options={options}
          defaultValue={projects[0].name}    
        />
    </span>
  )
}

export default DropdownExampleInline