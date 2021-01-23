import React, {useState} from 'react'
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection';
import Sidebar from '../components/Sidebar'
import SkillsSection from '../components/SkillsSection';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default Home
