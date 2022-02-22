import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const HomeCarousel = dynamic(() => import('./home.carousel'))
const HomeCategory = dynamic(() => import('./home.category'))
const HomeDiscount = dynamic(() => import('./home.discount'))
const HomeProduct = dynamic(() => import('./home.product'))
const HomeNews = dynamic(() => import('./home.news'))

const Home: NextPage = () => {
  return (
    <Box>
      <HomeCarousel />
      <HomeCategory />
      <HomeDiscount />
      <HomeProduct />
      <HomeNews />
    </Box>
  )
}

export default Home