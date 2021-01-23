import styled from 'styled-components';
import '../variables.css';

export const Hero = styled.div `
  background: #EFD9D5;
  overflow: hidden;

  @media screen and (min-width: 768px){
    overflow: hidden;
  }
`

export const HeroContainer = styled.div `
  padding: 0 30px;
  max-width: 1024px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 0 auto 0;
  height: calc(100vh - 80px) ;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
  }
`

export const HeroBg = styled.div `
  font-family: 'Cormorant Garamond';
  color: #fff;
  opacity: 50%;
  z-back: -10;
  position: absolute;
  top: auto;
  bottom: auto;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 5rem;
  text-align: center;
  padding: 2rem;
  
  
  @media screen and (max-width: 600px){
    line-height: 15rem;
  }

  @media screen and (min-width: 600px){
    font-size: 8rem;
  }
  @media screen and (min-width: 1024px){
    font-size: 12rem;
  }
`

export const HeroText = styled.div `
  font-family: 'Jonathan';
  z-index: 1;
  color: #9F7866;
  font-size: 6rem;
  text-align: center;
  text-shadow: #EFD5C9 0 0 1px, #C26868 0 -1px 2px, #C26868 0 -3px 2px, rgba(0,0,0,0.1) 0 30px 25px;

  @media screen and (max-width: 600px){
    line-height: 5.5rem;
  }
  @media screen and (min-width: 768px){
    font-size: 10rem;
  }
  @media screen and (min-width: 1024px){
    font-size: 15rem;
  }
`

export const HeroSocialWrapper = styled.div `
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  bottom: 2.5rem;

  @media screen and (min-width: 768px){
    column-gap: 2rem
  }
`


