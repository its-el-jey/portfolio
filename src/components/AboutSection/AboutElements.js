import styled from 'styled-components';
import '../variables.css';

export const About = styled.div `
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;
`

export const AboutContent = styled.div `
  display: grid;
  row-gap: 2rem;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2.5rem;
    column-gap: 2rem;
  }
`

export const AboutImg = styled.div `
  width: 100%;
`

export const AboutSub = styled.div `
  line-height: 2rem;
  text-align: center;
  display: grid;
  row-gap: 1rem;

  @media screen and (min-width: 768px){
    text-align: left;
  }
`

export const AboutName = styled.div `
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black);
`

export const AboutTxt = styled.div `
  font-size: 1.2rem;
  color: var(--gray);
`

export const ButtonWrapper = styled.div `
  display: grid;
  justify-items: center;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    justify-items: left;
  }
`

export const Btn = styled.div `
  text-transform: uppercase;
  width: max-content;
  text-align: center;
  border-radius: 0.5rem;
  padding: 10px 25px;
  font-size: 0.938rem;
  text-decoration: none;
  background-color: var(--blue);
  box-shadow: 0px 5px 0px 0px #3C93D5 ;

  &:active {
    -webkit-transform: translate(0px, 5px);
          transform: translate(0px, 5px);
  -webkit-box-shadow: 0px 1px 0px 0px;
          box-shadow: 0px 1px 0px 0px;
  }
`