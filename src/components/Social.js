import React from 'react';
import { Link } from 'react-router-dom';
import { email, github, linkedIn, airbnb } from './links';
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

  return (
    <div className={classes.breadCrumbs}>
      <Breadcrumbs>
        {linkedIn()}
        {github()}
        {email()}
        {airbnb()}
        <Link color='inherit' to='/aboutme'>
          <InfoIcon style={{ color: `gray` }} />
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Social;
