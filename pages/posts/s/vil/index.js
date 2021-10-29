import Layout from '../../../../components/layouts/article'
import { Title, Meta } from '../../../../components/posts/posts'
import { Badge } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'

import { useMemo } from 'react'

const VilSeries = () => {
  const intro = `
  # Tại sao lại có series này?
Trong khi đọc cuốn "Crafting Intepreters" của Robert Nystrom, một cuốn sách hay hướng đẫn cách tạo ra một ngôn ngữ kịch bản và trình thông dich của nó. Mình nhớ ra một câu hỏi mà nhiều người và mình đã từng nghĩ: "Tại sao không có ngôn ngữ lập trình nào bằng tiếng việt nhỉ 😂" Nghe hơi ngớ ngẩn nhưng đó cũng không phải là một ý tưởng tồi. Nhằm việc củng cố thêm kiến thức đã cóp nhặt được trong sách và cũng muốn chia sẻ với mọi người về cách mà tạo ra một ngôn ngữ mới. ViL ra đời như một ngôn ngữ lập trình với cú pháp tiếng việt.
Trình thông dịch của ViL sẽ được mình cập nhập qua repo ở cuối bài viết. Mong mọi người đồng hành trong hành trình này, với hiểu biết hạn hẹp, nếu mình có sai điều gì hãy để lại bình luận phía dưới nhé, cảm ơn các bạn!

# Tham khảo
Trình thông dịch cho VIL: [ViL Interpreters](https://github.com/definev/vil)
`

  return (
    <Layout>
      <Title>
        Vil <Badge>2021-present</Badge>
      </Title>
    </Layout>
  )
}

export default VilSeries
