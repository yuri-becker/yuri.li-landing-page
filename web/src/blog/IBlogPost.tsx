export interface IBlogPost {
  key: any,
  title: string,
  link: string,
  date: Date,
  categories: {key: string}[]
}
