import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Feed from '../Tweet/Feed'
import ProfileDetails from '../ProfileDetails'
import { baseUrl } from '../settings'

const Profile = () => {

    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        fetch(`${baseUrl}/tweeter/detail/root`)
        .then(res => res.json())
        .then(data => setUserDetails(data))
        .catch(err => alert(err))
    }, [])

    if(userDetails === null) {
        return <p>LOADING...</p>
    }

    return (
        <Flex justify="space-around">
            <Navbar></Navbar>
            <Flex direction="column" justifyContent="flex-start" backgroundColor="rebeccapurple" maxWidth={"50vw"} borderRight={"1px"} borderColor={"gray.200"}>
                <ProfileDetails userDetails={userDetails}></ProfileDetails>
                <Feed></Feed>
            </Flex>
        <Box borderColor={"gray.200"} borderLeft={"1px"} maxWidth={"25vw"} height={"100vh"} textAlign={"center"}>Last layout</Box>
    </Flex>
    )
}

export default Profile
