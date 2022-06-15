import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";

import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLinks";

interface  NavLinkProps extends LinkProps {
    name:string,
    icon: IconType,
    href:string
}
export function NavLink({name,icon, href, ...rest}:NavLinkProps ){
    return(
        <ActiveLink href={href} passHref>
        <ChakraLink display="flex" alignItems="center" {...rest}>
              <Icon as={icon} fontSize="20" />
              <Text ml="4" fontWeight="medium">
               {name}
              </Text> 
            </ChakraLink>
            </ActiveLink>
    )
}