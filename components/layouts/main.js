import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head>
        <title>Definev_ - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Layout