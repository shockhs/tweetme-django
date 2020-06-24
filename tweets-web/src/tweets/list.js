import React, { useEffect, useState } from 'react';
import { apiTweetList } from '../lookup';
import { Tweet } from './index';

export const TweetsList = ({ username, newTweet, setNewTweet }) => {
    const [tweets, setTweets] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    useEffect(() => {
        const handleData = (response, status) => {
            if (status === 200) {
                setTweets(response.results)
                setNextUrl(response.next)
            }
            else alert('Что-то пошло не так. Попробуйте позже')
        }
        apiTweetList(handleData, username)
    }, [newTweet, username])

    const handleLoadNext = (event) => {
        event.preventDefault()
        // NEED  SOME PRELOADER
        if (nextUrl !== null) {
            const handleLoadNextResponse = (response, status) => {
                if (status === 200) {
                    setTweets(tweets => [...tweets, ...response.results])
                    setNextUrl(response.next)
                }
                else alert('Что-то пошло не так. Попробуйте позже')
            }
            apiTweetList(handleLoadNextResponse, username, nextUrl)
        }
    }

    return (
        <div className="tweets">{tweets.map((tweet, index) => {
            return <Tweet tweet={tweet} key={index} setNewTweet={setNewTweet} />
        })}
            <div className="tweets-nextbutton">
                {nextUrl !== null && <button className="nextButton" onClick={handleLoadNext}>Показать еще</button>}
            </div>
        </div>
    )
}