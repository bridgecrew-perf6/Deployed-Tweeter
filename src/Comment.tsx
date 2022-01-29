import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Comment({commentor, comment}) {
    return (
        <Box border={"2px solid white"} padding={"5px"} margin={"5px"}>
            <Link to={`/profile/${commentor}`}><Heading as="h5">@{commentor}</Heading></Link>
            <Box as="p">{comment}</Box>
        </Box>
    )
}

export default Comment;
