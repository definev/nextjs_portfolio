import { Heading } from '@chakra-ui/layout'
import Article from '../components/layouts/article'
import PostsList from '../components/posts/posts-list'
import SeriesList from '../components/posts/series-list'

const Posts = () => {
  return (
    <Article>
      <Heading>Series</Heading>
      <SeriesList />
      <Heading>My posts</Heading>
      <PostsList />
    </Article>
  )
}

export default Posts
