import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Image, Embed } from 'semantic-ui-react';

export const ProjectShow = (props) => {
  const {
    name,
    image,
    slug,
    longDescription,
    technologies,
    github,
    websiteURL,
    demoVideo,
  } = props.project;



  return (
    <Container>
      {demoVideo !== "" ? <Embed
        id={demoVideo}
        placeholder={image.imageURL}
        source='youtube'
      /> : <Image center src={image.imageURL} alt=''></Image>}
      
      <Table celled definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Name: </Table.Cell>
            <Table.Cell collapsing>{name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Site: </Table.Cell>
            <Table.Cell>
              <a href={websiteURL} rel='noopener noreferrer' target='_blank'>
                {slug}
              </a>
            </Table.Cell>
          </Table.Row>
          {demoVideo && (
            <Table.Row>
              <Table.Cell>Demo: </Table.Cell>
              <Table.Cell></Table.Cell>
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
            <Table.Cell>Github Front End</Table.Cell>
            <Table.Cell>
              <a href={github.frontend}>{github.frontend}</a>
            </Table.Cell>
          </Table.Row>
          {github.backend !== '' && (
            <Table.Row>
              <Table.Cell>Github Backend</Table.Cell>
              <Table.Cell>
                <Link component='a' target='_blank' href={github.backend}>
                  {github.backend}
                </Link>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Container>
  );
};
