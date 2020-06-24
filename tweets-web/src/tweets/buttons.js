import React from 'react';
import { apiTweetAction } from '../lookup';

export const ActionBtn = ({ tweet, action, setNewTweet, setNumberOfLikes, setDidPerformAction }) => {

    const handleClick = (event) => {
        event.preventDefault()
        apiTweetAction(tweet.id, action, (response, status) => {
            if (status === 200) {
                setNumberOfLikes(response.likes)
                setDidPerformAction(didPerformAction => !didPerformAction)
            }
            else if (status === 201) setNewTweet(response)
            else alert('Что-то пошло не так. Попробуйте позже')
        })
    }

    switch (action) {
        case 'like':
            return <button className="actionButtons" onClick={(event) => handleClick(event)}>Like</button>
        case 'unlike':
            return <button className="actionButtons" onClick={(event) => handleClick(event)}>Unlike</button>
        case 'retweet':
            return <button className='actionButtons retweetButton' onClick={(event) => handleClick(event)}>Retweet</button>
        default: return null
    }
}
