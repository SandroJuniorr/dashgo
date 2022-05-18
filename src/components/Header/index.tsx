import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const IsWideVersion= useBreakpointValue({
    base: false,
    lg:true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
       <Logo/>
        {IsWideVersion && <Search/>}
        <Flex 
        align="center"
        ml="auto" >
            <NotificationNav/>
            <Profile showProfileData={IsWideVersion}/>
        </Flex>
    </Flex>
  );
}
