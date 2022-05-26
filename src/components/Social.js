import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkedIn, Github, Resume, Email, Airbnb, Twitter } from './Links';
import InfoIcon from '@material-ui/icons/Info';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core';

function Social() {
  const useStyles = makeStyles(() => ({
    breadCrumbs: {
      marginTop: `15px`,
      display: `flex`,
      justifyContent: `center`,
    },
  }));

  const classes = useStyles();
  const [showAboutMe] = useState(false)
  return (
    <div className={classes.breadCrumbs}>
      <Breadcrumbs>
        <Github />
        <Twitter />
        {showAboutMe && (
          <>
          <Email />
          <Resume />
          <LinkedIn />
          <Airbnb />
            <Link color='inherit' to='/aboutme'>
              <InfoIcon style={{ color: `gray` }} />
            </Link>
          </>
        )}
      </Breadcrumbs>
    </div>
  );
}

export default Social;
