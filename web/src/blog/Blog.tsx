import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {IBlogPost} from './IBlogPost'
import {BlogPost} from './BlogPost'

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<undefined | IBlogPost[]>()

  useEffect(() => {
    axios.get<string>('https://us-central1-landing-page-245120.cloudfunctions.net/blogFeed')
      .then(feed => new DOMParser().parseFromString(feed.data, 'text/xml'))
      .then(xml => xml.getElementsByTagName('channel')[0].getElementsByTagName('item'))
      .then(items => Array.from(items))
      .then(items => items.map(item => ({
        key: item.getElementsByTagName('guid')[0].textContent as string,
        title: item.getElementsByTagName('title')[0].textContent,
        date: new Date(Date.parse(item.getElementsByTagName('atom:updated')[0].textContent as string)),
        link: item.getElementsByTagName('link')[0].textContent as string,
        categories: Array.from(item.getElementsByTagName('category')).map(category => category.textContent as string)
      } as IBlogPost)))
      .then(posts => posts.filter(post => post.categories.length !== 0))
      .then(posts => posts.slice(0, 5))
      .then(setBlogPosts)
  }, [setBlogPosts])

  return (
    <div>
      <h2>Recent Publications on Medium</h2>
      {blogPosts && blogPosts.map(blogPost => (<BlogPost key={blogPost.key} blogPost={blogPost}/>))}
    </div>
  )
}
