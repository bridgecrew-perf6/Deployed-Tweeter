import React, {useContext} from 'react';
import {Box, Heading, Avatar, Button} from "@chakra-ui/react"
import { baseUrl } from './settings';
import { Link } from 'react-router-dom';

import { TokenContext, UserContext } from './App';

function FollowCard({username, first, last, image_url}) {

    const {user, setUser} = useContext(UserContext)
    const {token, setToken} = useContext(TokenContext)
    if(!user) {
        return <p>Please Login First</p>
    }

    const handleUnfollow = () => {
        fetch(`${baseUrl}/tweeter/${user.username}/`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({"unfollow": username})
        })
        .then(response => response.json())
        .then(data => alert("Unfollow Successful"))
        .catch(err => alert(err))
    }

    return (
        <Box border={"2px solid white"} margin={"5px"} padding={"10px"}>
            <Link to={`/profile/${username}`}>
                <Avatar src={image_url}></Avatar>
                <Heading as="h4" display={"inline"} marginX={"10px"}>@{username}</Heading>
            </Link>
            <Heading as="h4">{first || "JOHN"} {last || "DOE"}</Heading>
            <Button onClick={handleUnfollow}>Unfollow</Button>
        </Box>
    )
}

export default FollowCard;
