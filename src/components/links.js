import React from 'react'
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
import {  SvgIcon } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';




export const linkedIn = () => {
  return <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/rines/" component="a" onClick={(e) => console.log(e)}><LinkedInIcon /></Link>
}
export const twitter = () => {
  return <Link color="inherit" target="_blank" href="https://twitter.com/rines_io" component="a" onClick={(e) => console.log(e)}><TwitterIcon /></Link>
}

export const github = (props) => {
  return <Link color="inherit" target="_blank" href="https://www.github.com/tsrines" component="a" onClick={(e) => console.log(e)}><GitHubIcon /></Link>
}
export const resume = () => {
  return <Link color="inherit" href="https://www.learn.co/tsrines/resume" target="_blank" component="a" onClick={(e) => console.log(e)}><DescriptionIcon /></Link>
}
export const email = () => {
  return <Link color="inherit" href="mailto: tim@rines.io" target="_blank" component="a" onClick={(e) => console.log(e)}><EmailIcon /></Link>
}
export const airbnb = () => {
  return <Link
      color="inherit"
      target="_blank"
      href="https://www.airbnb.com/users/show/45316653"
      component="a"
      onClick={(e) => console.log(e)}>

      <SvgIcon
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="airbnb"
        width="24" 
        height="24" 
        xmlns="http://www.w3.org/2000/svg" 
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 448 512"
        >
        <path
          fill="currentColor"
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z">
        </path>

        </SvgIcon>
    </Link>
}
export const medium = () => {
  return <Link
    color="inherit"
    target="_blank"
    href="https://medium.com/@tim.rines.io"
    component="a"
    onClick={(e) => console.log(e)}
  ><SvgIcon
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"><path
        d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" /></SvgIcon></Link>
}

