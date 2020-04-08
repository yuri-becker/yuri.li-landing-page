import React from 'react'
import ReactDOM from 'react-dom'
import {Blog} from './blog/Blog'
import {Defer} from 'react-progressive-loader/lib'
import {Loader} from './common/Loader'


function initSection(id: string, component: React.FC) {
  ReactDOM.render(
    <Defer render={component} loadOnScreen renderPlaceholder={() => <Loader/>} />,
    document.getElementById(id)
  )
}

initSection('blog', () => <Blog/>)
initSection('skills', () => <h2>Skills</h2>)


