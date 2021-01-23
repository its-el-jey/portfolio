import React from 'react';
import '../../App.css';
import { FaGithub } from 'react-icons/fa';
import { FaGlobeAsia } from 'react-icons/fa';
import { ProjectCard, ProjectImg, ProjectContent, ProjectTitle, ProjectLink,} from './ProjectsElements';

function Skill({img, alt, title, url, srcCode}) {
  return (
    <>
      <ProjectCard>
        <ProjectImg>
          <img className="img" src={img} alt={alt} />
        </ProjectImg>

        <ProjectContent>
          <ProjectTitle> {title} </ProjectTitle>
          <ProjectLink>
            <FaGlobeAsia />
            <a href={url} className="project-link " target="_blank" rel="noreferrer noopener" >Live View</a>
          </ProjectLink>
          <ProjectLink>
            <FaGithub />
            <a href={srcCode} className="project-link " target="_blank" rel="noreferrer noopener" >Github Link</a>
          </ProjectLink>
        </ProjectContent>
      </ProjectCard>
    </>
  )
}

export default Skill
