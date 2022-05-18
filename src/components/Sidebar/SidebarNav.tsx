import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
        <NavSection name="GERAL">
        <NavLink name="Dashboard" icon={RiDashboardLine}/>
        <NavLink name=" Usuários" icon={RiContactsLine}/>
        </NavSection>
        <NavSection name="AUTOMAÇÂO">
        <NavLink name=" Formularios" icon={RiInputMethodLine}/>
        <NavLink name="Automação" icon={RiGitMergeLine}/>
        </NavSection>
      </Stack>
    )
}