import React from 'react';
import {Container} from '../Section';
import {Hero, HeroBg, HeroText, HeroSocialWrapper} from './HeroElements';
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';


const HeroSection = () => {
  
  return (
    <Hero id="home" >
      <Container>
      <HeroBg>
        developer. <br/>
        designer.
      </HeroBg>
      <HeroText>
        Loida Jane Anfone
      </HeroText>
      <HeroSocialWrapper>
        <a className="github hero" href="https://github.com/its-el-jey" target="_blank" rel="noreferrer noopener" > <FaGithub size={16} /> Github</a>
        <a className="linkedin hero" href="https://www.linkedin.com/in/loida-jane-anfone-8647511b3/" target="_blank" rel="noreferrer noopener" > <FaLinkedin size={16} /> LinkedIn </a>
        <a className="fb hero" href="https://www.facebook.com/loidajaneanfone" target="_blank" rel="noreferrer noopener" > <FaFacebook size={16} /> Facebook </a>
      </HeroSocialWrapper>
    </Container>
    </Hero>
  )
}

export default HeroSection
