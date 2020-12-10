import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Divider, Image } from 'semantic-ui-react';
import timHeadshot from '../TimPossibleHeadshot.jpg';

const AboutMe = () => {
  const history = useHistory();
  return (
    <div style={{ padding: `40px` }}>
      <Image bordered centered circular size='small' alt='' src={timHeadshot} />{' '}
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
          <h2>Tim Rines</h2>
        </Divider>

        <p>
          {' '}
          I’ll make this short and sweet. I grew up in Cary, North Carolina
          after my dad was transferred from MA with a company called Data
          General. He later worked for IBM and brought home one of the first IBM
          Aptiva PCs. I was hooked on PC gaming, networking, building gaming
          computers, and LAN parties. In the end, I decided I didn’t want to
          make my hobby my job, so instead, got into sales after college.{' '}
        </p>
        <p>
          After a successful career in telecommunications sales and Airbnb
          rental investing in Charleston, SC, my focus has shifted back to my
          original hobby, technology. In March of 2020, right before NYC was
          shut down, I finished my in-person Software Engineering 15-week
          immersive at Flatiron School Manhattan. I feel so thankful to have
          been able to finish my whole program in person. The sense of community
          and passion for code seemed as if it were a fragrance you pick up as
          soon as you walk in the door.
        </p>
        <p>
          {' '}
          For safety reasons (2020, right?), I have moved back to Charleston,
          where I remotely interned at ErrundsOnline. Their goal is to connect
          local brick and mortar stores with the communities, starting with a
          bodega in NYC, through an app built in React Native, Express, Apollo
          GraphQL and PostgreSQL. It was a real pleasure working with some of
          the most up to date technologies out.
        </p>
        <p>
          Recently I have finished a co-op program with Hatchways.io. It was a
          great program with actionable feedback avenues including code reviews,
          technical reviews/interviews, and peer reviews. You can check out the
          final product{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://mock-interview-platform.herokuapp.com/'
          >
            here
          </a>
          . I am currently looking for my next opportunity so if you would like
          to reach out and discuss potential roles in your company, my email is
          <a href='mailto: tim@rines.io'> tim@rines.io</a>.
        </p>
        <Button floated='right' onClick={() => history.push({ pathname: '/' })}>
          Back
        </Button>
      </Container>
    </div>
  );
};

export default AboutMe;
