import Head from "next/head";
import {Box} from "@chakra-ui/react"

import React from 'react'
{/* <Layout>
    <h1>test</h1>
</Layout> */}

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
    navbar
</header>
<main>
    {children}
</main>
<footer>
    footer
</footer>
        </Box>
        
        </>
  )
}

export default Layout
