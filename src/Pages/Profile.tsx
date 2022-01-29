import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Feed from '../Tweet/Feed'
import ProfileDetails from '../ProfileDetails'
import { baseUrl } from '../settings'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const [userDetails, setUserDetails] = useState(null)
    const {username} = useParams()

    useEffect(() => {
        fetch(`${baseUrl}/tweeter/detail/${username}`)
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
            <Flex direction="column" justifyContent="flex-start" maxWidth={"50vw"} border={"1px"} borderColor={"gray.200"}>
                <ProfileDetails userDetails={userDetails}></ProfileDetails>
                <Feed url={`${baseUrl}/tweet/${username}`}></Feed>
            </Flex>
        <Box></Box>
    </Flex>
    )
}

export default Profile
