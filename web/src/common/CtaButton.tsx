import React from 'react'

export const CtaButton: React.FC<{ text: string, link: string}> =
  ({text, link}) => <a href={link} className='cta-button'>
    <button>{text}</button>
  </a>
