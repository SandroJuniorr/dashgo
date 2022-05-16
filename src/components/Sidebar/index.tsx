import { Box,  Stack,  } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection name="GERAL">
        <NavLink name="Dashboard" icon={RiDashboardLine}/>
        </NavSection>
        <NavSection name="AUTOMAÇÂO">
        <NavLink name=" Usuários" icon={RiContactsLine}/>
        </NavSection>
      </Stack>
    </Box>
  );
}
