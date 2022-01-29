import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Feed from '../Tweet/Feed'
import TweetForm from '../Tweet/TweetForm'

import { TokenContext } from '../App'
import { baseUrl } from '../settings'

const Home = () => {

    // @ts-ignore
    const {token, setToken} = useContext(TokenContext)

    return (
        <Flex justify="space-around">
            <Navbar></Navbar>
            <Flex direction="column">
                <TweetForm></TweetForm>
                {token === "" ? <Feed></Feed>: <Feed></Feed>}
            </Flex>
            <Box>Last layout</Box>
            
        </Flex>
    )
}

export default Home
