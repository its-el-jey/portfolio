import styled from 'styled-components';
import '../variables.css';

export const Contact = styled.div `
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;
`

export const ContactContent = styled.div `
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 1rem;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: left;
    column-gap: 3rem;
  }
`

export const Img = styled.div `
  width: 100%;
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
