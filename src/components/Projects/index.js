import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Remote Control to Security Systems. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Security' ?
            <ToggleButton active value="Security" onClick={() => setToggle('Security')}>Security'S</ToggleButton>
            :
            <ToggleButton value="Security" onClick={() => setToggle('Security')}>Security'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Remote Control' ?
            <ToggleButton active value="Remote Control" onClick={() => setToggle('Remote Control')}>Remote Control'S</ToggleButton>
            :
            <ToggleButton value="Remote Control" onClick={() => setToggle('Remote Control')}>Remote Control'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Arduino' ?
            <ToggleButton active value="Arduino" onClick={() => setToggle('Arduino')}>Arduino</ToggleButton>
            :
            <ToggleButton value="Arduino" onClick={() => setToggle('Arduino')}>Arduino</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects