import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const HomeDiscount: NextPage = () => {
  return (
    <Box mt={32} px={20}>
      <Flex justify="center">
        <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">Sản phẩm ưu đãi</Text>
      </Flex>

      <Flex align="center" justify="space-around" px={40} borderWidth={1} borderColor="red.400" borderRadius="2xl" p={5}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <Box key={item} borderRight={index !== 4 ? '1px' : 'none'} px={4}>
              <Link href="/">
                <a>
                  <Flex direction="column" align="center">
                    <Image src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988000" alt="a" width={150} height={150} />
                    <Text mt={2}>Ổi đào</Text>
                    <Flex align="center">
                      <Text>150.000₫</Text>
                      <Text textDecoration="line-through" ml={2}>190.000₫</Text>
                    </Flex>
                  </Flex>
                </a>
              </Link>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}

export default HomeDiscount