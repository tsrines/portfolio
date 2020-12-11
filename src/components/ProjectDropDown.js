import React, { useState } from 'react';
import {
  Avatar,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router';

const ProjectDropDown = ({ projects }) => {
  const handleChange = (e) => {
    setProject(e.target.value);
    history.push(`/${e.target.value}`);
  };

  const history = useHistory();
  const [project, setProject] = useState('');

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    dropDown: {
      display: `flex`,
      justifyContent: `center`,
    },
    input: {
      marginRight: `25px`,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.dropDown}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.input} id='demo-simple-select-label'>
          <Typography variant='h4'>Projects</Typography>
        </InputLabel>
        <Select
          className={classes.selectMenu}
          labelId='demo-simple-select-label'
          variant='outlined'
          value={project}
          onChange={handleChange}
        >
          {projects.map(({ slug, image, name }, idx) => (
            <MenuItem className={classes.menuItem} value={slug} key={idx}>
              <Avatar src={image.imageURL}>{name}</Avatar>
              <Typography>{name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ProjectDropDown;
