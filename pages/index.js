import NextLink from 'next/link'

import Article from '../components/layouts/article'
import {
  Button,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Link
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSection } from '../components/bio'

const Page = () => {
  return (
    <Article>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('red', 'whiteAlpha.200')}
          p={3}
          mb={6}
          color={'white'}
          align="center"
        >
          Hello I&apos;m junior developer based on Vietnam!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              BUI DAI DUONG
            </Heading>
            <p>Junior developer (Flutter / React / Golang)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.900"
              borderWidth={5}
              borderStyle="solid"
              maxWidth={{ base: '120px', md: '70px' }}
              display="inline-block"
              borderRadius="full"
              src="images/definev.jpeg"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            When I was a kid, I love video games and want someday I can make my
            own game. I started with C in 7th grade, and give up because it too
            hard for me at that time. When I grown up and serious about my
            programming passion, I acttually focus learning algorithm and data
            structure with C++ and make my own snake game when I was 10th grade
            student. Randomly, I found flutter and learn it for making a robot
            controller in robocon contest in high school and after that i'm
            exploring Flutter and making a production app with it. It's a long
            journey but I feel i'm not complete yet, always keep learning and
            make my code better than yesterday.
          </Paragraph>

          <Paragraph>
            Oh, sometimes I'm sharing something cool with you, about what
            mistake I made and what I'm learning now. You can check it in here.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Posts{' '}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experiences
          </Heading>

          <BioSection>
            <BioYear>2016</BioYear>
            First touch to computer and fall in love with it
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2018</BioYear>
            Start learning algorithm and fun stuff with C++, Pascal
          </BioSection>
          <BioSection>
            <BioYear>2019 - present</BioYear>
            Self-learning Flutter and have more than 2 years of experience
          </BioSection>
          <BioSection>
            <BioYear>07/2020 - 01/2021</BioYear>
            Solo developer of{' '}
            <NextLink href="https://sojohotels.com/vi/experiences">
              <Link>Sojo Hotel Controller Tablet App</Link>
            </NextLink>{' '}
            with Flutter
          </BioSection>
          <BioSection>
            <BioYear>05/2021 - present</BioYear>
            Start learning Golang and React
          </BioSection>
          <BioSection>
            <BioYear>09/2021 - present</BioYear>
            Work as freelancer with Flutter, React and Golang
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2019 - 2020</BioYear>
            Participate in GDG Cloud Vietnam contest and get 10st place
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            4st National Young Information Technology Contest
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduate from Han Thuyen Highschool
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Start learning at Phenikaa University
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          Playing Ukulele, Music, Sharing Knownledge, Flutter, Dart and Go
        </Section>
      </Container>
    </Article>
  )
}

export default Page
