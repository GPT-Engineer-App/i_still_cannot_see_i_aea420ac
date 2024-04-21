import React from "react";
import { ChakraProvider, Box, Flex, Text, Button, VStack, Heading, SimpleGrid, GridItem, Image, Input, Icon, useColorMode, IconButton, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaSearch, FaUserTie, FaFilm, FaHandsHelping, FaMoon, FaSun } from "react-icons/fa";

import { FaAngleDown } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [language, setLanguage] = React.useState("AR"); // AR for Arabic, EN for English

  const toggleLanguage = () => {
    setLanguage(language === "AR" ? "EN" : "AR");
  };

  return (
    <ChakraProvider>
      <Menu isOpen={isOpen} onClose={onClose}></Menu>
      <Box bg={colorMode === "light" ? "gray.100" : "gray.700"} color={colorMode === "light" ? "gray.800" : "white"} minH="100vh" p={5}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            <MenuButton as={Button} rightIcon={<FaAngleDown />} colorScheme="teal" variant="outline" onClick={onOpen}>
              {language === "AR" ? "العربية" : "English"}
            </MenuButton>
            <Button ml={4} onClick={toggleLanguage} colorScheme="teal" variant="solid">
              {language === "AR" ? "EN" : "AR"}
            </Button>
          </Flex>
          <MenuList>
            <MenuItem onClick={toggleLanguage}>{language === "AR" ? "English" : "العربية"}</MenuItem>
          </MenuList>
          <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="md" m={4} colorScheme="teal" isRound />
        </Flex>
        <Heading as="h1" size="xl" textAlign="center" mb={10}>
          فيلم هاب
        </Heading>

        <Flex justifyContent="center" mb={10}>
          <Box p={6} bg="white" borderRadius="md" shadow="md" maxW="lg" w="full">
            <VStack spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                ابحث عن مشروعك التالي أو الموهبة
              </Text>
              <Flex w="full">
                <Input placeholder="ابحث عن مشاريع أو مستقلين" />
                <Button ml={2} colorScheme="blue" leftIcon={<FaSearch />}>
                  بحث
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Flex>

        <SimpleGrid columns={2} spacing={10}>
          <GridItem colSpan={1}>
            <Box bg="white" borderRadius="md" shadow="md" p={6}>
              <Flex alignItems="center" mb={4}>
                <Icon as={FaUserTie} w={10} h={10} color="blue.500" />
                <Text fontSize="xl" fontWeight="semibold" ml={2}>
                  للمستقلين
                </Text>
              </Flex>
              <Text mb={4}>أنشئ ملفًا شخصيًا، وعرض مهاراتك، واحصل على توظيف للمشاريع في صناعة الأفلام.</Text>
              <Button colorScheme="blue" w="full">
                انضم كمستقل
              </Button>
            </Box>
          </GridItem>

          <GridItem colSpan={1}>
            <Box bg="white" borderRadius="md" shadow="md" p={6}>
              <Flex alignItems="center" mb={4}>
                <Icon as={FaFilm} w={10} h={10} color="green.500" />
                <Text fontSize="xl" fontWeight="semibold" ml={2}>
                  لشركات الإنتاج
                </Text>
              </Flex>
              <Text mb={4}>انشر مشاريعك، وتصفح عبر ملفات المستقلين، وبناء فريقك المثالي.</Text>
              <Button colorScheme="green" w="full">
                نشر مشروع
              </Button>
            </Box>
          </GridItem>
        </SimpleGrid>

        <Box mt={10} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            كيف يعمل
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
            <VStack maxW="sm" mb={{ base: 10, md: 0 }} mr={{ md: 10 }}>
              <Icon as={FaSearch} w={12} h={12} color="purple.500" />
              <Text fontSize="md" fontWeight="semibold">
                فرص البحث
              </Text>
              <Text fontSize="sm">استخدم ميزة البحث لدينا للعثور على المشاريع أو المحترفين المناسبين لاحتياجاتك.</Text>
            </VStack>
            <VStack maxW="sm">
              <Icon as={FaHandsHelping} w={12} h={12} color="orange.500" />
              <Text fontSize="md" fontWeight="semibold">
                الاتصال والتعاون
              </Text>
              <Text fontSize="sm">تواصل مع شركات الإنتاج أو المستقلين وتعاون في مشاريع أفلام مثيرة.</Text>
            </VStack>
          </Flex>
        </Box>

        <Flex justifyContent="center" mt={10}>
          <Image src="https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3MDYwMjU3MjF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" shadow="md" maxWidth="600px" />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
