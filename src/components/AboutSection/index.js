import React from 'react';
import img from '../images/aboutImg.png';
import cv from './file/LJAnfone_CV.pdf';
import {SectionCont, Title, Sub} from '../Section';
import {About, AboutContent, AboutImg, AboutSub, AboutName, AboutTxt, ButtonWrapper, Btn} from './AboutElements';

const AboutSection = () => {
  return (
    <About id="about">
      <SectionCont>
        <Title>About</Title>
        <Sub>small information about me</Sub>

        <AboutContent>
          <AboutImg> <img src={img} alt="img"/> </AboutImg>
          <AboutSub>
            <AboutName>I'm LJ</AboutName>
            <AboutTxt>
              I'm an aspiring Web Developer and Designer, recently graduated with a Bachelor of Science in Information and Communication and Technology.
              I am seeking an entry-level position to use my knowledge in Web Development and Designs and give character to your company projects.
            </AboutTxt>
            <ButtonWrapper>
              <Btn><a href={cv} download="LJAnfone_CV.pdf" className="color">Download CV</a></Btn>
            </ButtonWrapper>
          </AboutSub>
        </AboutContent>
      </SectionCont>
    </About>
  )
}

export default AboutSection
