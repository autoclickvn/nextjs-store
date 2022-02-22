import { Grid, GridItem, Text } from "@chakra-ui/react";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' bgColor="red.100" mt={20} px={32} pb={20} pt={10}>
      <GridItem>
        <Text>Liên hệ</Text>
      </GridItem>

      <GridItem>
        <Text>Danh mục</Text>
      </GridItem>

      <GridItem>
        Về chúng tôi
      </GridItem>
    </Grid>
  )
}

export default Footer