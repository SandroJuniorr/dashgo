import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const {onOpen}= useSidebarDrawer()
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
      {!IsWideVersion && (
        <IconButton 
        aria-label="Open navigation"
        icon={<Icon as={RiMenuLine}/>}
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        mr="2">

        </IconButton>
      )
      }
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
