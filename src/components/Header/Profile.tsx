import { Box, Flex,Text,Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Sandro Junior </Text>
                    <Text color="gray.300" fontSize="small">
                        sandrox377@gmail.com
                    </Text>

                    

                </Box>
                <Avatar size="md" name="Sandro Junior" />
            </Flex>
    )
}