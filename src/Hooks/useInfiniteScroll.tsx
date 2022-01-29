import React from 'react';
import { useState, useEffect } from 'react';
import { tweet, tweetArray } from '../Types/Tweets';

export default function useInfiniteScroll(query: string, pageNumber: number) {

    const [load, setLoad] = useState(true)
    const [tweets, setTweets] = useState([]) as [tweetArray, Function]
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setLoad(true)
        fetch(`${query}?page_number=${pageNumber}`)
        .then(res => {
            if(res.status === 204) {
                setHasMore(false)
                return []
            }
            return res.json()
        })
        .then( (data: tweetArray) => {
            setTweets((tweets: tweetArray) => [...tweets, ...data])
            setLoad(false)
        } )
    }, [query, pageNumber])

    return [load, tweets, hasMore]
}
