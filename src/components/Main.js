import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Picture from './Picture';
import Social from './Social';
import ProjectCarousel from './ProjectCarousel';

const Main = ({ projects }) => {
  const useStyles = makeStyles(() => ({
    mainContainer: {
      minHeight: '100vh',
    },
    projectButton: {
      display: `flex`,
      justifyContent: `center`,
      marginTop: `10px`,
    },
  }));

  const [projectView, setProjectView] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid
        container
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={false} sm={3} />
        {!projectView && (
          <Grid container direction='column' item xs={12} sm={6}>
            <Grid item xs={12}>
              <Picture />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
            {!projectView && (
              <Grid xs={12} item className={classes.projectButton}>
                <Button variant='outlined' onClick={() => setProjectView(true)}>
                  Projects
                </Button>
              </Grid>
            )}
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
    </div>
  );
};

export default Main;
