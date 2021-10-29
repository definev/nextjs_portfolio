import { SimpleGrid } from '@chakra-ui/layout'
import SeriesItem from './series-item'

const SeriesList = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6} my={5}>
      <SeriesItem
        image="https://user-images.githubusercontent.com/62325868/138510986-cdfb34b2-12c4-4b83-947c-32735c6a7478.png"
        title="Vil - Ngôn ngữ lập trình bằng tiếng việt"
        subtitle="Trong series này mình và các bạn sẽ cùng nhau tạo nên một ngôn ngữ hoàn toàn mới với cú pháp tiếng việt."
        seriesHref="/posts/s/vil"
      />
    </SimpleGrid>
  )
}

export default SeriesList
