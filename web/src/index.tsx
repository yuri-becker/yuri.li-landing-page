import React from 'react'
import ReactDOM from 'react-dom'
import {Blog} from './blog/Blog'
import {Defer} from 'react-progressive-loader/lib'
import Rellax from 'rellax'
import {Loader} from './common/Loader'


function initSection(id: string, component: React.FC) {
  const el = document.getElementById(id) as HTMLElement
  new Rellax(el, {speed: 4})
  ReactDOM.render(<Defer render={component} loadOnScreen renderPlaceholder={() => <Loader/>} />, el)
}

initSection('blog', () => <Blog/>)
initSection('skills', () => <div/>)


