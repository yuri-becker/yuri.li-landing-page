import {IBlogPost} from './IBlogPost'
import React from 'react'

export const BlogPost: React.FC<{blogPost: IBlogPost}> = ({blogPost}) => {
  return (<a href={blogPost.link} className='blog-post'>
    <h3>{blogPost.title}</h3>
  </a>)
}
