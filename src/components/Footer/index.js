import React from 'react';
import '../variables.css';
import { SectionCont } from '../Section';
import { Footer, FooterName, FooterSocial, FooterData, Span, SpanData } from './FooterElement';
import { FaGithub, FaLinkedin, FaFacebook, FaReact } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <Footer>
      <SectionCont>
        <FooterName> LJ </FooterName>
        <FooterSocial>
          <a className="github" href="https://github.com/its-el-jey" target="_blank" rel="noreferrer noopener" > <FaGithub size={32} /> </a>
          <a className="linkedin" href="https://www.linkedin.com/in/loida-jane-anfone-8647511b3/" target="_blank" rel="noreferrer noopener" > <FaLinkedin size={32} /> </a>
          <a className="fb" href="https://www.facebook.com/loidajaneanfone" target="_blank" rel="noreferrer noopener" > <FaFacebook size={32} /> </a>
        </FooterSocial>
        <FooterData>
          <p>&#169; LJ Anfone | DevFolio 2020</p>
          <SpanData>Powered by <Span> React <FaReact /> </Span></SpanData>
        </FooterData>
      </SectionCont>
    </Footer>
  )
}

export default FooterSection
