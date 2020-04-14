import React, {useEffect, useState} from 'react'
import {BlogPost} from './BlogPost'
import {Loader} from '../common/Loader'
import {BlogPost as IBlogPost, BlogRepository} from '../BlogRepository'
import {ParallaxImage} from '../common/ParallaxImage'

export const Blog: React.FC<{ blogRepo: BlogRepository }> = ({blogRepo}) => {
  const [blogPosts, setBlogPosts] = useState<undefined | IBlogPost[]>()

  useEffect(() => {
    blogRepo.blogPosts.then(posts => posts.slice(0, 5)).then(setBlogPosts)
  }, [setBlogPosts, blogRepo])


  return (
    <div className='content-side-image-wrap'>
      <ParallaxImage src='/assets/images/blog.jpg' alt='My trusty Model M keyboard' className='section-image'/>
      <div className="content-wrap">
        <h2>Recent Stories on Medium</h2>
        {blogPosts ? blogPosts.map(blogPost => (<BlogPost key={blogPost.key} blogPost={blogPost}/>)) : <Loader/>}
      </div>
    </div>
  )
}
