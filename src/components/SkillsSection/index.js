import React from 'react';
import {SectionCont, Title, Sub} from '../Section';
import {Skills, SkillsContent} from './SkillsElements';
import {skills} from './data';
import Skill from './Skill';

const SkillsSection = () => {
  return (
    <Skills id="skills">
      <SectionCont>
        <Title>Skills</Title>
        <Sub>programming languages and tools I use</Sub>
          
        <SkillsContent>
          {skills.map((skill) => {
            return (
              <Skill key={skill.id} {...skill} />
            )
          })}
        </SkillsContent>
      </SectionCont>
    </Skills>
  )
}

export default SkillsSection
