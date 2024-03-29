import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types'
import Carousel from 'react-material-ui-carousel';
import { Container, Table, Image, Embed } from 'semantic-ui-react';

export const ProjectShow = ({
  project: {
    name,
    image,
    slug,
    longDescription,
    technologies,
    github,
    websiteURL,
    demoVideo,
  },
}) => {
  const useStyles = makeStyles(() => ({
    projectShowContainer: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.projectShowContainer}>
      {demoVideo !== '' ? (
        <Embed
          active
          autoplay={true}
          color='white'
          hd={false}
          id={demoVideo}
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 10,
            },
          }}
          placeholder={image.imageURL}
          source='youtube'
        />
      ) : (
        <Carousel>
          <Image fluid src={image.imageURL} alt='Project Image'></Image>
        </Carousel>
      )}

      <Table celled definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Name: </Table.Cell>
            <Table.Cell collapsing>{name}</Table.Cell>
          </Table.Row>
          {websiteURL !== '' && (
            <Table.Row>
              <Table.Cell>Site: </Table.Cell>
              <Table.Cell>
                <a href={websiteURL} rel='noopener noreferrer' target='_blank'>
                  {slug}
                </a>
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>{longDescription}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Technologies</Table.Cell>
            <Table.Cell>{technologies}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              {github.backend ? `GitHub Front End` : ` GitHub `}
            </Table.Cell>
            <Table.Cell>
              <a href={github.frontend}>
                {github.backend ? `Front End` : `Repo`}
              </a>
            </Table.Cell>
          </Table.Row>
          {github.backend !== '' && (
            <Table.Row>
              <Table.Cell>GitHub Backend</Table.Cell>
              <Table.Cell>
                <a href={github.backend}>Back End</a>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Container>
  );
};



ProjectShow.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    websiteURL: PropTypes.string.isRequired,
    demoVideo:PropTypes.string.isRequired})
}

export default ProjectShow

