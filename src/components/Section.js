import styled from 'styled-components';
import './variables.css';

export const Container = styled.div `
  padding: 0 30px;
  max-width: 1300px;
  display: grid;
  row-gap: 1rem;
  justify-items: center;
  align-items: center;
  margin: 0 auto 0;
  height: 100vh ;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
  }
`

export const SectionCont = styled.div `
  padding: 0 30px;
  max-width: 1300px; 
  display: grid;
  row-gap: 1.5rem;
  justify-items: center;
  align-items: center;
  margin: 2.5rem auto 2.5rem;
  height: max-content ;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
  }
`

export const Title = styled.div `
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--red);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(80%, var(--nude-yellow)), color-stop(80%, transparent));
    background-image: linear-gradient(to bottom, var(--nude-yellow) 80%, transparent 80%);
  background-position: 0 0.7em;
  background-repeat: repeat-x;
  background-size: 1px 1em;
  margin-left: auto;
  margin-right: auto;
  ${'' /* margin-top: 2.5rem; */}

  @media screen and (min-width: 1280px){
    font-size: 3rem;
  }
`

export const Sub = styled.div `
  text-align: center;
  font-family: 'Jonathan', Lora;
  font-size: 3rem;
  color: var(--black);

  @media screen and (min-width: 768px){
    font-size: 4.5rem;
  }
  @media screen and (min-width: 1280px){
    font-size: 5rem;
  }
`

