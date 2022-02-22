import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HOME_CATEGORY } from "./home.data";

const HomeCategory: NextPage = () => {
  return (
    <Flex align="center" justify="space-around" mt={20} px={40}>
      {HOME_CATEGORY.map(item => {
        return (
          <Box key={item.route}>
            <Link href={item.route}>
              <a>
                <Flex direction="column" align="center">
                  <Box borderRadius="full" overflow="hidden">
                    <Image src={item.image} alt={item.title} width={120} height={120} />
                  </Box>
                  <Text mt={2}>{item.title}</Text>
                </Flex>
              </a>
            </Link>
          </Box>
        )
      })}
    </Flex>
  )
}

export default HomeCategory