import React from 'react';
import {SectionCont, Title, Sub} from '../Section';
import {Projects, ProjectsContent, ProjectCard, ProjectImg, ProjectContent, ProjectTitle, ProjectLink} from './ProjectsElements';
import {projects} from './data';
import Project from './Project';
import { FaGlobeAsia } from 'react-icons/fa';

const ProjectsSection = () => {
  return (
    <Projects id="projects">
      <SectionCont>
        <Title>Projects</Title>
        <Sub>some projects I work with</Sub>
          
        <ProjectsContent>
          {projects.map((project) => {
            return (
              <Project key={project.id} {...project} />
            )
          })}
        </ProjectsContent>
      </SectionCont>
    </Projects>
  )
}

export default ProjectsSection
