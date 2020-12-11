import React from 'react';
import timHeadshot from '../TimPossibleHeadshot.jpg';
import { Image } from 'semantic-ui-react';

const Picture = () => {
  return (
    <Image bordered centered circular size='small' alt='' src={timHeadshot} />
  );
};
export default Picture;
