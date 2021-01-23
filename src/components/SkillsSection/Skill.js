import React from 'react';
import {SkillCard, SkillImg, SkillTitle} from './SkillsElements';

function Skill({ img, alt, skillName }) {
  return (
    <>
      <SkillCard>
        <SkillImg>
          <img src={img} alt={alt} />
        </SkillImg>
        <SkillTitle> 
          {skillName}
        </SkillTitle>
      </SkillCard>
    </>
  )
}

export default Skill
