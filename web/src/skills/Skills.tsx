import React, {FC, useEffect, useState} from 'react'
import {Skill as ISkill, SkillsRepository} from '../SkillsRepository'
import {Loader} from '../common/Loader'
import {range} from 'lodash'

export const Skills: FC<{ skillsRepo: SkillsRepository }> = ({skillsRepo}) => {
  const [skills, setSkills] = useState<ISkill[] | undefined>(undefined)
  const [expanded, setExpanded] = useState<boolean>(false)

  useEffect(() => {
    skillsRepo.skills.then(setSkills)
  }, [setSkills, skillsRepo])

  return <div className='content-side-image-wrap'>
    <div className="content-wrap">
      <h2>Skills</h2>
      {!skills ? <Loader/> :
        <React.Fragment>
          <ul className='skills-list'>
            {skills?.slice(0, !expanded ? 5 : undefined).map(skill => <Skill key={skill.name} skill={skill}/>)}
          </ul>
          {!expanded && <button className='button--flat' onClick={() => setExpanded(true)}>More...</button>}
          <a href='https://yuri.li/ref/malt'>
            <button>Hire me on Malt</button>
          </a>
        </React.Fragment>
      }
    </div>
    <img src='/assets/images/skills.jpg' alt='Screen showing HTML code'/>
  </div>
}

const Skill: React.FC<{ skill: ISkill }> = ({skill}) => (
  <li>
    <span className='skills__stars'>
      {range(0, skill.level).map(i => <StarFull key={i}/>)}
      {range(0, 5 - skill.level).map(i => <StarEmpty key={i}/>)}
    </span>
    <span>
      {skill.name}
    </span>
  </li>
)

const StarEmpty = () => <i className='far fa-star'/>
const StarFull = () => <i className='fas fa-star'/>
