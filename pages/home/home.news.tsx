import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const HomeNews: NextPage = () => {
  return (
    <Box mt={32} px={20}>
      <Flex justify="center">
        <Text textTransform="uppercase" fontSize="xl" fontWeight="bold">Tin tức mới nhất</Text>
      </Flex>

      <Flex align="center" justify="space-around" px={40} p={5}>
        {[1, 2, 3].map((item, index) => {
          return (
            <Box key={item} px={8}>
              <Link href="/">
                <a>
                  <Flex direction="column" align="center">
                    <Image src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t1.jpg?v=1625889497397" alt="a" width={300} height={200} />
                    <Text fontWeight="semibold" mt={2}>Cách nấu thịt lợn ngon</Text>
                    <Text textAlign="justify" mt={2}>Cách nấu như thế này Cách nấu như thế này Cách nấu như thế này Cách nấu như thế này </Text>
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

export default HomeNews