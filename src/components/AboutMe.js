import { Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Divider, Image } from 'semantic-ui-react';
import bp1377 from '../bp1377.jpeg';

const AboutMe = () => {
  const history = useHistory();

  return (
    <div style={{ padding: `25px` }}>
      <Image bordered centered circular size='small' alt='' src={bp1377} />{' '}
      <Container
        style={{
          marginTop: `25px`,
          color: `gray`,
          alignContent: `center`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
        text
      >
        <Divider style={{ marginBottom: `15px`, color: `gray` }} horizontal>
          <Typography variant='h2'>Tim Rines</Typography>
        </Divider>

        <p>
          {' '}
          I’ll make this short and sweet. I grew up in Cary, North Carolina
          after my dad was transferred from MA with a company called Data
          General. He later worked for IBM and brought home one of the first IBM
          <a
            href='https://en.wikipedia.org/wiki/IBM_Aptiva'
            target='_blank'
            rel='noopener noreferrer'
          >
            {` Aptiva`}
          </a>{' '}
          PCs. I was hooked on PC gaming, networking, building gaming computers,
          and LAN parties. In the end, I decided I didn’t want to make my hobby
          my job, so instead, got into sales after college.{' '}
        </p>
        <p>
          After a successful career in telecommunications sales and Airbnb
          rental investing in Charleston, SC, my focus has shifted back to my
          original hobby, technology. In March of 2020, right before NYC was
          shut down, I finished my in-person Software Engineering 15-week
          immersive at Flatiron School Manhattan. I feel so thankful to have
          been able to finish my whole program in person. The sense of community
          and passion for making a difference in the world, with code, seemed as if it were a fragrance you pick up as
          soon as you walk in the door.
        </p>
        <p>
          {' '}
          For safety reasons (2020, right?), I have moved back to Charleston,
          where I remotely interned at{' '}
          <a
            href='http://www.errundsonline.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Errunds
          </a>
          I worked with a great company called{' '}
          <a
            href='http://www.hatchways.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hatchways.io
          </a>
          . They have a great program where you build a project in a team setting, with other junior developers,
          guided by an industry leader who provides guidance and actionable feedback avenues including
          code reviews, technical reviews/interviews, and peer reviews. You can
          check out the final product{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://mock-interview-platform.herokuapp.com/'
          >
            here
          </a>
          . I am currently working at Animoto.com where we make it easy to create professional videos with ease.  I have a passion for the up and coming Web3 internet, guiding my children towards a path of happiness, and learning something new each day.
          If you have a project or an opportunity and I have some spare time, reach out! my email is
          <a href='mailto: tim@rines.io'> tim@rines.io</a>.
        </p>
        <Button floated='right' onClick={() => history.push({ pathname: '/' })}>
          <Typography>Back</Typography>
        </Button>
      </Container>
    </div>
  );
};

export default AboutMe;
