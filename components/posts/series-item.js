import { Image } from '@chakra-ui/image'
import NextLink from 'next/link'
import { Box, Heading } from '@chakra-ui/layout'
import Paragraph from '../paragraph'

const SeriesItem = ({ title, subtitle, image, seriesHref }) => {
  return (
    <NextLink href={seriesHref}>
      <Box>
        <Image src={image} />

        <Heading as="h4" mt={5} mb={3} fontSize={18}>{title}</Heading>
        <Paragraph>{subtitle}</Paragraph>
      </Box>
    </NextLink>
  )
}

export default SeriesItem
