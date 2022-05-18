import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarContextProviderProps{
    children:ReactNode
}
type SidebarDreawerContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDreawerContextProps )

export function SidebarDrawerProvider ({children}:SidebarContextProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()
    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}
export const useSidebarDrawer = ()=> useContext(SidebarDrawerContext)