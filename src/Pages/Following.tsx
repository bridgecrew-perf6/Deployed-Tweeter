import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useParams } from "react-router-dom"
import { baseUrl } from '../settings';
import FollowCard from '../FollowCard';
import FeedCard from '../Tweet/FeedCard';
import { v4 as uuidv4 } from 'uuid';
import { TokenContext, UserContext } from '../App';



function Following() {

    const {username} = useParams()
    const [following, setFollowing] = useState([])

    const {user, setUser} = useContext(UserContext)
    const {token, setToken} = useContext(TokenContext)


    useEffect(() => {
        if(!user || !token) {
            return
        }
        fetch(`${baseUrl}/tweeter/${username}/`)
        .then(res => res.json())
        .then(data => setFollowing(data))
        .catch(err => alert(err))
    }, [])

    if(user === null || token === '' ) {
        return <p>Please Login to see this page</p>
    }

    const renderFollowCard = () => {
        if(following.length === 0) {
            return <p>Please Follow someone to see your following</p>
        }
        console.log(following)
        let cards = following.map((follow) => <FollowCard key={uuidv4()} {...follow}></FollowCard>)
        return cards
    }

    return (
        <Box>
            <Heading>These are the poeple you are currently following</Heading>
            {renderFollowCard()}
        </Box>
    )
}

export default Following;
