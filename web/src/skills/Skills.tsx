import React, {FC, useEffect, useState} from 'react'
import {Skill as ISkill, SkillsRepository} from '../SkillsRepository'
import {Loader} from '../common/Loader'
import {range} from 'lodash'
import {ParallaxImage} from '../common/ParallaxImage'
import {CtaButton} from '../common/CtaButton'

export const Skills: FC<{ skillsRepo: SkillsRepository }> = ({skillsRepo}) => {
  const [skills, setSkills] = useState<ISkill[] | undefined>(undefined)

  useEffect(() => {
    skillsRepo.skills.then(setSkills)
  }, [setSkills, skillsRepo])

  return <div className='content-side-image-wrap'>
    <div className="content-wrap">
      <h2>Skills</h2>
      {!skills ? <Loader/> :
        <React.Fragment>
          <SkillsList skills={skills}/>
          <CtaButton text='Hire me on Malt' link='https://yuri.li/ref/malt'/>
        </React.Fragment>
      }
    </div>
    <ParallaxImage src='/assets/images/skills.jpg' alt='Screen showing HTML code' className='section-image'/>
  </div>
}

const SkillsList: React.FC<{ skills: ISkill[] }> = ({skills}) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return <div className='skills-list'>
    <ul className={expanded ? 'skills-list--expanded' : ''}>
      {skills?.slice(0, !expanded ? 5 : undefined).map(skill => <Skill key={skill.name} skill={skill}/>)}

      {
        !expanded && <li><button className='skills__more button--flat' onClick={() => setExpanded(true)}>More...</button></li>
      }
    </ul>
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
