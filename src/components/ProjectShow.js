import React, { } from 'react'
import { Container, Table, Image } from 'semantic-ui-react'


export const ProjectShow = (props) => {
  const { name, image,slug, longDescription, technologies, github, websiteURL} = props.project

  return (
    <Container>
      <Image src={image.imageURL} alt=""></Image>
      <Table celled definition>
        <Table.Body >
          <Table.Row >
            <Table.Cell collapsing >Name: </Table.Cell>
            <Table.Cell collapsing>{name}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Site: </Table.Cell>
            <Table.Cell ><a href={websiteURL} rel="noopener noreferrer" target="_blank">{slug}</a></Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Description</Table.Cell>
            <Table.Cell >{longDescription}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Technologies</Table.Cell>
            <Table.Cell >{technologies}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Github Front End</Table.Cell>
            <Table.Cell ><a href={github.frontend}>{github.frontend}</a></Table.Cell>
          </Table.Row>
          {github.backend !== "" &&
            <Table.Row >
              <Table.Cell >Github Backend</Table.Cell>
              <Table.Cell ><a href={github.backend}>{github.backend}</a></Table.Cell>
            </Table.Row>}

        </Table.Body>
      </Table>
    </Container>



  )

}

