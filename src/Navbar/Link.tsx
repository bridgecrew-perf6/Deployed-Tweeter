import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'

import { LinkItemProps } from '../Types/sidebar'
import { Icon } from '@chakra-ui/icon'


const Link = ({name, icon}: LinkItemProps) => {
    return (
        <Box _hover={{
            background: "white",
            color: "teal.500",
          }} maxWidth="15vw" paddingY="2.5vh">    
            <NavLink to={name === "Home" ? "/" :`${name.toLowerCase()}`}>
                <Box as="span" alignItems="center">
                    <Icon as={icon}></Icon>
                </Box>
                <Box as="span" paddingX="0.75vw">{name}</Box>
            </NavLink>
        </Box>
    )
}

export default Link
