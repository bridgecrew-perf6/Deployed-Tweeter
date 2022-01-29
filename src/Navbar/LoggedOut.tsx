
import { Box, Button, Center} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOut = () => {
    return (
        <Box width="100%" marginBottom={"20px"}>
            <NavLink to="/login"><Button width="100%">Login</Button></NavLink>
            <Center width="100%">
                <NavLink to="/register" style={{textAlign: "center", width: "100%"}}>Sign Up</NavLink>
            </Center>
        </Box>
    )
}

export default LoggedOut
