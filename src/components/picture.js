import React, { Fragment } from 'react';
import DropdownExampleInline from './DropDownExampleInline';
import TimHeadshot from '../TimHeadshot.jpg'


import {
  linkedIn,
  email,
  twitter,
  github,
  resume
} from './links';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export const Picture = (props) => {
  return (
    <Fragment>
      <div>
        <img
          className='picture'
          alt=''
          src={TimHeadshot}
        />
      </div>
      <div className='link'>
        <Breadcrumbs aria-label='breadcrumb'>
          {linkedIn()}
          {twitter()}
          {/* {airbnb()} */}
          {resume()}
          {/* {medium()} */}
          {github()}
          {email()}
        </Breadcrumbs>
      </div>
      <DropdownExampleInline {...props} />
    </Fragment>
  );
};
