import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

// import SocialSignIn from '../LoginRegistration/SocialSignIn';
import StandardSignIn from '../LoginRegistration/StandardSignIn';
import Registration from './Registration';

const Login = () => {
    return (
        <Flex width="100vw" height="100vh" justifyContent="center" alignItems="center">
            <Box height={"100vh"}>
                 <Flex direction="row" width="100%" height="100vh" justifyContent={"center"} alignItems={"center"}>
                    <Box width="40vw" height="80vh" paddingX={"5vw"} paddingTop={"30vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <StandardSignIn></StandardSignIn>
                    </Box>
                    <Box width="40vw" height="100vh" borderLeft={"3px solid white"} paddingX={"5vw"}>
                        <Registration></Registration>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        
    )
}
export default Login;