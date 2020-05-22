import React, { } from 'react'
import { Container, Table, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const ProjectShow = (props) => {
  const { project } = props
  console.log(project)
  return (
    <Container>
      <Image src="" alt=""></Image>
      <Table celled definition>
        <Table.Body >
          <Table.Row >
            <Table.Cell collapsing >Name: </Table.Cell>
            <Table.Cell collapsing>{project.name}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Site: </Table.Cell>
            <Table.Cell ><a href={project.websiteURL} rel="noopener noreferrer" target="_blank">{project.slug}</a></Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Description</Table.Cell>
            <Table.Cell >{project.longDescription}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Technologies</Table.Cell>
            <Table.Cell >{project.technologies}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell >Github Front End</Table.Cell>
            <Table.Cell ><Link>{project.github.frontend}</Link></Table.Cell>
          </Table.Row>
          {project.github.backend !== "" &&
            <Table.Row >
              <Table.Cell >Github Backend</Table.Cell>
              <Table.Cell ><Link>{project.github.backend}</Link></Table.Cell>
            </Table.Row>}

        </Table.Body>
      </Table>
    </Container>



  )

}

