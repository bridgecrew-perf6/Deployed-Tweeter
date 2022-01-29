import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'

import { LinkItemProps } from '../Types/sidebar'
import { Icon } from '@chakra-ui/icon'
import { UserContext } from '../App'
import { useContext } from 'react'
import { Button } from '@chakra-ui/react'

const Link = ({name, icon}: LinkItemProps) => {

    const {user, setUser} = useContext(UserContext)

    let to = ""
    if(name === "Home") {
        to = "/"
    }
    if(name === "Settings") {
        to="/settings"
    }
    if(name === "Following") {
        to=`/following/${user.username}`
    }

    return (
        <Box _hover={{
            background: "white",
            color: "teal.500",
          }} maxWidth="15vw" paddingY="2.5vh">    
            <NavLink to={to}>
                <Box as="span" alignItems="center">
                    <Icon as={icon}></Icon>
                </Box>
                <Box as="span" paddingX="0.75vw">{name}</Box>
            </NavLink>
        </Box>
    )
}

export default Link
