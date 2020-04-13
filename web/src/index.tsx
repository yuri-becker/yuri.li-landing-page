import React from 'react'
import ReactDOM from 'react-dom'
import {Blog} from './blog/Blog'
import {Defer} from 'react-progressive-loader/lib'
import {Loader} from './common/Loader'
import {Skills} from './skills/Skills'
import {EmbeddedSkillsRepository} from './EmbeddedSkillsRepository'
import {MediumBlogRepository} from './MediumBlogRepository'


function initSection(id: string, component: React.FC) {
  ReactDOM.render(
    <Defer render={component} loadOnScreen renderPlaceholder={() => <Loader/>} />,
    document.getElementById(id)
  )
}

initSection('blog', () => <Blog blogRepo={new MediumBlogRepository()}/>)
initSection('skills', () => <Skills skillsRepo={new EmbeddedSkillsRepository()}/>)


