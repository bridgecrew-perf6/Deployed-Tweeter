import { Avatar, Box, Heading, Button, ButtonGroup, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa'
import {GiAnticlockwiseRotation} from "react-icons/gi";
import { tweet } from '../Types/Tweets'

import { Link } from 'react-router-dom';

// @ts-ignore
const FeedCard = ({ tweeter: {first: firstName, last: lastName, image_url: avatar, username}, content: tweetContent, likes, posted_on, id}: tweet) => {
    const name = `${firstName} ${lastName}`

    return (
        <Box border="1px" borderColor="gray.200" marginX="1vw" marginY="1vh" paddingX="2vw" paddingY="2vh">
            <Flex direction="row">
                <Link to={`/profile/${username}`}>
                <Avatar name={name} src={avatar} marginRight="1.75vw"></Avatar>
                </Link>
                <Flex direction="column">
                    <Flex>
                        <Link to={`/profile/${username}`}>
                        <Heading as="h3" size="md" paddingRight="1vw">{name}</Heading>
                        <Box as="span">{"@" + username}</Box>
                        </Link>
                    </Flex>
                    <Link to={`/tweet/${id}`}>
                    <Box>{tweetContent}</Box>
                    <ButtonGroup>
                        <Link to={`/tweet/${id}`}><Button size="sm"><Icon as={FaRegComment}></Icon></Button></Link>
                        <Button size="sm"><Icon as={AiOutlineHeart}></Icon>{likes}</Button>
                        {/* <Button size="sm"><Icon as={GiAnticlockwiseRotation}></Icon></Button> */}
                    </ButtonGroup>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default FeedCard
