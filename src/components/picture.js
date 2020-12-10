import React, { Fragment } from 'react';
import ProjectDropDown from './ProjectDropDown';
import TimHeadshot from '../TimPossibleHeadshot.jpg';
import { linkedIn, email, twitter, github, resume, airbnb } from './links';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';

const Picture = (props) => {
  return (
    <Fragment>
      <div>
        <img className='picture' alt='' src={TimHeadshot} />
      </div>
      <div className='link'>
        <Breadcrumbs>
          {linkedIn()}
          {resume()}
          {github()}
          {email()}
          {airbnb()}
          <Link color='inherit' to='/aboutme'>
            <InfoIcon style={{ color: `gray` }} />
          </Link>
        </Breadcrumbs>
      </div>
      <ProjectDropDown {...props} />
    </Fragment>
  );
};
export default Picture;
