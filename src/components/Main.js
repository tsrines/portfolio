import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Picture from './Picture';
import Social from './Social';
import ProjectCarousel from './ProjectCarousel';

const Main = ({ projects }) => {
  const useStyles = makeStyles(() => ({
    mainContainer: {
      padding: `50px`,
    },
    projectButton: {
      display: `flex`,
      justifyContent: `center`,
      marginTop: `25px`,
    },
  }));

  const [projectView, setProjectView] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid item xs={false} sm={3} />
        {!projectView && (
          <Grid container direction='column' item xs={12} sm={6}>
            <Grid item xs={12}>
              <Picture />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
            <Grid item xs={false} sm={12}></Grid>
          </Grid>
        )}
        {projectView && (
          <Grid item xs={12}>
            <ProjectCarousel
              setProjectView={setProjectView}
              projectView={projectView}
              projects={projects}
            />
          </Grid>
        )}

        <Grid item xs={false} sm={3} />
      </Grid>
      {!projectView && (
        <div className={classes.projectButton}>
          <Button variant='outlined' onClick={() => setProjectView(true)}>
            Projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default Main;
