import styled from 'styled-components';
import '../variables.css';

export const Projects = styled.div `
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;
  overflow: hidden;
`

export const ProjectsContent = styled.div `
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectCard = styled.div `
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--white);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ${'' /* height: 500px; */}
`

export const ProjectImg = styled.div `
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
`

export const ProjectContent = styled.div `
  padding: 1rem;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 0.8rem;
`

export const ProjectTitle = styled.div `
  font-weight: 700;
  font-size: 1rem;
  color: var(--black);
`

export const ProjectLink = styled.div `
  color: gray;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  width: 125px;
  text-align: left;

  &:hover {
    color: #C26868;
    border-bottom: 1px dotted #C26868;
  }
  
`
