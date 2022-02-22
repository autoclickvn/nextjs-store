import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const HomeProduct: NextPage = () => {
  return (
    <Box px={32} mt={32}>
      <Center textTransform="uppercase" fontSize="xl" fontWeight="bold">Danh sách sản phẩm</Center>
      <Flex justify="end">
        <Flex>
          <Box>
            <button>
              <Text borderBottom="1px">Mỹ phẩm</Text>
            </button>
          </Box>
          <Box ml={5}>
            <button>
              <Text borderBottom="1px">Thực phẩm chức năng</Text>
            </button>
          </Box>
        </Flex>
      </Flex>

      <Grid templateColumns='repeat(4, 1fr)' mt={10}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return (
            <GridItem key={item}>
              <Link href="/">
                <a>
                  <Flex direction="column" align="center">
                    <Image src="/images/home/img-category-3.jpg" width={220} height={220} alt="a" />
                    <Text>Táo tàu</Text>
                    <Text>100.000</Text>
                  </Flex>
                </a>
              </Link>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default HomeProduct