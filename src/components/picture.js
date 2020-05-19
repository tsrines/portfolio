import React from 'react'
import { Fragment } from 'react'
import { linkedIn, twitter, github, resume, medium, airbnb } from './links'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export const Picture = () => {
  return (
    <Fragment>
      <div >
        <img className="picture" alt="" style={{}}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQE4GsW9EANqIg/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=hL-1Au7zqrZPR6OXEPJGNHnIAdsg4xDBqAjnEgT7cOA" />
      </div>

      <div className="link">
        <Breadcrumbs aria-label="breadcrumb">
          {airbnb()}
          {linkedIn()}
          {twitter()}
          {github()}
          {resume()}
          {medium()}
        </Breadcrumbs >
      </div>
    </Fragment>
  )
}