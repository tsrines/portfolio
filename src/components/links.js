import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
import { IconButton } from '@material-ui/core';

export const linkedIn = () => {
  return <IconButton className="link"><LinkedInIcon/></IconButton>
}
export const twitter = () => {
  return <IconButton className="link"><TwitterIcon/></IconButton>
}

export const github = () => {
  return <IconButton><GitHubIcon/></IconButton>
}
export const email = () => {
  return <IconButton><EmailIcon/></IconButton>
}

