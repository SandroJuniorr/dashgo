import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface  NavLinkProps extends LinkProps {
    name:string,
    icon: IconType
}
export function NavLink({name,icon, ...rest}:NavLinkProps ){
    return(
        <Link display="flex" alignItems="center" {...rest}>
              <Icon as={icon} fontSize="20" />
              {/* <Text ml="4" fontWeight="medium">
               {name}
              </Text> */ name}
            </Link>
    )
}