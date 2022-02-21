import Link from "next/link"
import Image from "next/image"
import {Box,Flex,Text,Avatar} from "@chakra-ui/react"
// import { Avatar } from '@chakra-ui/avatar';
// import { FaBed, FaBath } from 'react-icons/fa';
// import { BsGridFill } from 'react-icons/bs';
// import { GoVerified } from 'react-icons/go';
// import millify from 'millify';

import defaultImage from "../assets/images/default.jpg"
import React from 'react'

const Property = ({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
  <Flex  flexWrap="wrap" w="420px" p="5" paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
    <Box>
      <Image  src={coverPhoto?coverPhoto.url:defaultImage} alt="property.jsx"  width={400} height={260}/>
    </Box>
    
    </Flex>  
    </Link>
  )
}

export default Property