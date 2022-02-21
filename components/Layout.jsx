import Navbar from "./Navbar";
import Head from "next/head";
import {Box} from "@chakra-ui/react"
import Footer from "./Footer"
import React from 'react'

const Layout = (  {children}) => {
  return (
    <>
        <Head>
            <title>
                real estate
            </title>
        </Head>
        <Box maxWidth="1280px"   m="auto">

<header>
    <Navbar/>
</header>
<main>
    {children}
</main>
<footer>
    <Footer/>
</footer>
        </Box>
        
        </>
  )
}

export default Layout
