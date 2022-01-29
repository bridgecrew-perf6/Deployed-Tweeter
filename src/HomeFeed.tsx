import React, { useEffect, useState, useRef, useCallback, useContext } from 'react'
import { baseUrl } from './settings';
import { tweetArray, tweet } from './Types/Tweets';
import FeedCard from './Tweet/FeedCard';

import { v4 as uuidv4 } from 'uuid';

import InfiniteScroll from 'react-infinite-scroll-component';
import { TokenContext } from './App';

type urlData = {
    url: string
}

const HomeFeed = (props: urlData) => {

    const {url} = props
    const {token, setToken} = useContext(TokenContext)

    const [pageNumber, setPageNumber] = useState(1) as [number, Function] 
    const [items, setItems] = useState([]) as [tweetArray, Function]
    const [load, setLoad] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {

        if(pageNumber !== 1) {
            return
        }

        fetch(`${url}?page_number=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(response => {
            if(response.status === 204) {
                setLoad(true)
                setHasMore(false)
                return []
            }
            setPageNumber(pageNumber + 1)
            return response.json()
        })
        .then(newItems => {
            let renderItems = newItems.map((item: tweet) => <FeedCard {...item} key={uuidv4()}></FeedCard>)
            setItems( (items: any) => [...items, ...renderItems])
            setLoad(false)
        })
    }, [pageNumber])

    const fetchData = () => {
        fetch(`${url}?page_number=${pageNumber}`)
        .then(response => {
            if(response.status === 204) {
                setLoad(true)
                setHasMore(false)
                return []
            }
            setPageNumber(pageNumber + 1)
            return response.json()
        })
        .then(newItems => {
            let renderItems = newItems.map((item: tweet) => <FeedCard {...item} key={uuidv4()}></FeedCard>)
            setItems( (items: any) => [...items, ...renderItems])
            setLoad(false)
        })
    }
    
    return         <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<p>Loading..</p>}
        endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all. End of Feed</b>
    </p>
  }
        >
            {items}
        </InfiniteScroll>
}

export default HomeFeed
