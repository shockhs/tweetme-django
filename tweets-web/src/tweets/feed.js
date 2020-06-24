import React, { useEffect, useState } from 'react';
import { apiTweetFeed } from '../lookup';
import { Tweet } from './index';

export const FeedList = ({ newTweet, setNewTweet }) => {
    const [tweets, setTweets] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    useEffect(() => {
        const handleData = (response, status) => {
            if (status === 200) {
                setTweets(response.results)
                setNextUrl(response.next)
            }
        }
        apiTweetFeed(handleData)
    }, [newTweet])

    const handleLoadNext = (event) => {
        event.preventDefault()
        // NEED  SOME PRELOADER
        if (nextUrl !== null) {
            const handleLoadNextResponse = (response, status) => {
                if (status === 200) {
                    setTweets(tweets => [...tweets, ...response.results])
                    setNextUrl(response.next)
                }
            }
            apiTweetFeed(handleLoadNextResponse, nextUrl)
        }
    }

    return (
        <div className="tweets">{tweets.map((tweet, index) => {
            return <Tweet tweet={tweet} key={index} setNewTweet={setNewTweet} />
        })}
            <div className="tweets-nextbutton">
                {nextUrl !== null && <button onClick={handleLoadNext}>Показать еще</button>}
            </div>
        </div>
    )
}