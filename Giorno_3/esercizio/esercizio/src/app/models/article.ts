import {iPost} from "./post"

export interface iArticle {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
