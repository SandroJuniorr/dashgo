import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { SidebarDrawerProvider } from "../contexts/SidebarContext"
import { theme } from "../styles/theme"


function MyApp({ Component, pageProps } : AppProps) {
  return( 
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvider>
     <Component {...pageProps} />
     </SidebarDrawerProvider>
  </ChakraProvider>
  )
}

export default MyApp
