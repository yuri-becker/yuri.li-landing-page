import React from 'react'
import {BlogPost as IBlogPost} from '../BlogRepository'

export const BlogPost: React.FC<{blogPost: IBlogPost}> = ({blogPost}) => {
  return (<div className='blog-post'>
    <ul className='categories'>{blogPost.categories.map(category => <li key={category.key}>{category.key}</li>)}</ul>
    <a href={blogPost.link}>{blogPost.title}</a>
  </div>)
}
