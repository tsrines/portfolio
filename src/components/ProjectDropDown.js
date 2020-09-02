import React from 'react';
import { Dropdown } from 'semantic-ui-react';

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

  return (
    <div className='dropdown'>
      <Dropdown text='PROJECTS' header='Projects' inline options={options} />
    </div>
  );
};

export default ProjectDropDown;
