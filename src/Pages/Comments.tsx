import React, { useContext, useEffect, useState } from 'react';
import { Box, FormControl, Input, Button } from '@chakra-ui/react';
import { baseUrl } from '../settings';
import { useParams } from 'react-router-dom';

import FeedCard from '../Tweet/FeedCard';
import Comment from '../Comment';
import { TokenContext } from '../App';

function Comments() {

    const [comments, setComments] = useState(null)
    const [comm, setComm] = useState({comment: ""})
    const {token, setToken} = useContext(TokenContext)
    const { id } = useParams()

    useEffect(() => {
        fetch(`${baseUrl}/tweet/comment/${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => alert(err))
    }, [])

    const handleCommentChange = (e: Object) => {
        // @ts-ignore
        console.log(e)
        setComm({comment: e.target.value})
    }

    const handleCommentSubmit = () => {
        fetch(`${baseUrl}/tweet/comment/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(comm)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    if(comments === null ) {
        return <p>Loading...</p>
    }


    return (
        <Box>
            <FeedCard {...comments}></FeedCard>
            <FormControl>
                <Input type="text" value={comm.comment} placeholder={'Write Your comment here'} onChange={handleCommentChange}></Input>
                <Button onClick={handleCommentSubmit}>Submit Comment</Button>
            </FormControl>
            {/* @ts-ignore */}
            {comments.comments.map((comment) => <Comment {...comment}></Comment>)}
        </Box>
    )
}

export default Comments;
