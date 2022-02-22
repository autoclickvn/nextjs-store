import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel: NextPage = () => {
  return (
    <Box>
      <Carousel autoPlay infiniteLoop showArrows stopOnHover showStatus={false}>
        <div>
          <Image src="/images/home/slide-1.jpg" alt="slide 1" width={1980} height={700} />
        </div>
        <div>
          <Image src="/images/home/slide-2.jpg" alt="slide 2" width={1980} height={700} />
        </div>
        <div>
          <Image src="/images/home/slide-3.jpg" alt="slide 3" width={1980} height={700} />
        </div>
      </Carousel>
    </Box>
  )
}

export default HomeCarousel