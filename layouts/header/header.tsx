import { Box, Flex, Input, Text } from "@chakra-ui/react"
import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { HEADER_MENU } from "./header.data"

const Header: NextPage = () => {
  return (
    <Flex bgColor="red.100" w="full" position="fixed" top={0} left={0} zIndex={40} align="center" px={10} h={16}>
      <Flex align="center" flex={0.4}>
        {HEADER_MENU.map(item => {
          if (!item.route) {
            return (
              <Box mx={4} key={item.title}>
                <button>
                  <Flex>
                    <Text>
                      <FontAwesomeIcon icon={item.icon} />
                    </Text>
                    <Text color="gray.600" fontWeight={500} ml={1}>
                      {item.title}
                    </Text>
                  </Flex>
                </button>
              </Box>
            )
          }
          return (
            <Box mx={4} key={item.route}>
              <Link href={item.route}>
                <a>
                  <Flex>
                    <Text>
                      <FontAwesomeIcon icon={item.icon} />
                    </Text>
                    <Text color="gray.600" fontWeight={500} ml={1}>
                      {item.title}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </Box>
          )
        })}
      </Flex>

      <Flex flex={0.2} justify="center">
        <Image src="/images/logo.png" width={120} height={40} alt="logo" />
      </Flex>

      <Flex flex={0.4} justify="end" align="center">
        <Box position="relative">
          <Text position="absolute" top={3} left={3} zIndex={2}><FontAwesomeIcon icon={faSearch} /></Text>
          <Input placeholder="Tìm kiếm" bgColor="#FFF" />
        </Box>

        <button>
          <Text><FontAwesomeIcon icon={faCartArrowDown} /></Text>
        </button>

        <Flex>
          <Box borderRadius="full">
            <Image src="/images/avatar-user.png" width={30} height={30} alt="user" />
          </Box>

          <Text>Nguyễn</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header