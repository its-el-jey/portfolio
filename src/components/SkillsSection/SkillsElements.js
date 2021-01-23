import styled from 'styled-components';

export const Skills = styled.div `
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;
  background: var(--bg-pink);
`

export const SkillsContent = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-bottom: 2.5rem;
  
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3rem;
    column-gap: 3rem;
  }
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(6, 1fr);
  }
`

export const SkillCard = styled.div `
  padding: 1rem;
  border-radius: 0.25rem;
  width: 110px;
  background: var(--white);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const SkillImg = styled.div `
  width: 100%;
`

export const SkillTitle = styled.div `
  text-align: center;
  font-size: 12px;
`
