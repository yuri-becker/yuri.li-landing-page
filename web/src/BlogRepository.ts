export interface BlogRepository {
  readonly blogPosts: Promise<BlogPost[]>
}

export interface BlogPost {
  key: any,
  title: string,
  link: string,
  date: Date,
  categories: { key: string }[]
}
