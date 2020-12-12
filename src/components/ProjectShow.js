import { makeStyles } from '@material-ui/core';
import React from 'react';
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
        <Image fluid src={image.imageURL} alt='Project Image'></Image>
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
