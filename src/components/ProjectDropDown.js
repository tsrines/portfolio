import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const ProjectDropDown = ({ history, projects }) => {
  const options = [];
  projects.forEach((project) => {
    let optionHash = {};
    optionHash.key = project.name;
    optionHash.text = project.name;
    optionHash.value = project.name;
    optionHash.onClick = (e, data) => history.push(`/${project.slug}`);
    optionHash.image = { size: 'small', src: project.image.imageURL };
    options.push(optionHash);
  });

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    history.push(`/${e.target.value}`);
  };

  const [selectedValue, setSelectedValue] = useState('');
  console.log(selectedValue);
  return (
    // <div className='dropdown'>
    //   <Dropdown defaultValue='Projects' button options={options} />
    // </div>
    <div className='dropdown'>
      <Select
        variant='outlined'
        value={selectedValue}
        placeholder='Projects'
        onChange={(e) => handleChange(e)}
      >
        {projects.map((project, idx) => (
          <MenuItem value={project.slug} key={idx}>
            {project.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default ProjectDropDown;
