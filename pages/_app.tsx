import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../styles/globals.css';

const Header = dynamic(() => import('layouts/header'))
const Footer = dynamic(() => import('layouts/footer'))

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Header />
    <Box pt={16}>
      <Component {...pageProps} />
    </Box>
    <Footer />
  </ChakraProvider>
}

export default MyApp
