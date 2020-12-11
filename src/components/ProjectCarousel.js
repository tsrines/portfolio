import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, makeStyles, Typography } from '@material-ui/core';

import { ProjectShow } from './ProjectShow';

function ProjectCarousel({ projects, projectView, setProjectView }) {
  const useStyles = makeStyles(() => ({
    container: {
      marginTop: `15px`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Carousel
        className={classes.carousel}
        animation='slide'
        autoPlay={false}
        changeOnFirstRender={true}
      >
        {projects.map((project, i) => (
          <ProjectShow
            projectView={projectView}
            setProjectView={setProjectView}
            key={i}
            project={project}
          />
        ))}
      </Carousel>
      <Button variant='outlined' onClick={() => setProjectView(false)}>
        <Typography variant='h6'>Back</Typography>
      </Button>
    </div>
  );
}

export default ProjectCarousel;
