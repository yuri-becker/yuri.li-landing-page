import React, {FC, useEffect, useState} from 'react'
import {Skill, SkillsRepository} from '../SkillsRepository'
import {Loader} from '../common/Loader'

export const Skills: FC<{ skillsRepo: SkillsRepository }> = ({skillsRepo}) => {
  const [skills, setSkills] = useState<Skill[] | undefined>(undefined)

  useEffect(() => {
    skillsRepo.skills.then(setSkills)
  })

  return <div className='content-side-image-wrap'>
    <div className="content-wrap">
      <h2>Skills</h2>
      {!skills ? <Loader/> :
        <ul>
          {skills.map(skill => <li>{skill.name}</li>)}
        </ul>
      }
    </div>
    <img src='/assets/images/skills.jpg' alt='Screen showing HTML code'/>
  </div>
}
