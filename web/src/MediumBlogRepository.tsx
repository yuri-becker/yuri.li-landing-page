import axios from 'axios'
import {BlogPost, BlogRepository} from './BlogRepository'

export class MediumBlogRepository implements BlogRepository {
  get blogPosts() {
    return axios.get<string>('https://us-central1-landing-page-245120.cloudfunctions.net/blogFeed')
      .then(feed => new DOMParser().parseFromString(feed.data, 'text/xml'))
      .then(xml => xml.getElementsByTagName('channel')[0].getElementsByTagName('item'))
      .then(items => Array.from(items))
      .then(items => items.map(item => ({
        key: item.getElementsByTagName('guid')[0].textContent as string,
        title: item.getElementsByTagName('title')[0].textContent,
        date: new Date(Date.parse(item.getElementsByTagName('atom:updated')[0].textContent as string)),
        link: item.getElementsByTagName('link')[0].textContent as string,
        categories: Array.from(item.getElementsByTagName('category'))
          .map(category => ({key: (category.textContent as string).replace('-', ' ')}))
      } as BlogPost)))
      .then(posts => posts.filter(post => post.categories.length !== 0))
  }
}
