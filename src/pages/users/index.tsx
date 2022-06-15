import { Box, Flex, Heading,Button, Icon, Thead, Tr, Th, Checkbox, Table, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    const isDrawerSidebar = useBreakpointValue({
        base:true,
        lg:false
      })
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
            <Sidebar/>
            <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>
                    <Link href="/users/create" passHref>
                    <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiAddLine} fontSize="20" />} > Criar Novo</Button>
                    </Link>
                </Flex>
                
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["4","4","6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="pink"/>
                            </Th>
                            <Th>Usuário</Th>
                            {isDrawerSidebar && <Th>Data de cadastro</Th>}
                            <Th width="8"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px={["4","4","6"]}>
                            <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Sandro Rogerio </Text>
                                    <Text fontSize="sm" color="gray.300">sandrox377@gmail.com</Text>
                                </Box>
                            </Td>
                            {isDrawerSidebar && <Td>
                                04 de abril,2022
                            </Td>}
                             <Td>
                             
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={["4","4","6"]}>
                            <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Sandro Rogerio </Text>
                                    <Text fontSize="sm" color="gray.300">sandrox377@gmail.com</Text>
                                </Box>
                            </Td>
                            {isDrawerSidebar && <Td>
                                04 de abril, 2022
                            </Td>}
                             <Td>
                             
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={["4","4","6"]}>
                            <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Sandro Rogerio </Text>
                                    <Text fontSize="sm" color="gray.300">sandrox377@gmail.com</Text>
                                </Box>
                            </Td>
                            {isDrawerSidebar && <Td>
                                04 de abril,2022
                            </Td>}
                             <Td>
                             
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Pagination/>

            </Box>
            </Flex>
        </Box>
    )
}