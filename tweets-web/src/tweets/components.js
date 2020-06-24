import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { apiTweetCreate, apiTweetDetail } from '../lookup';
import '../styles/tweets.css';
import { FeedList } from './feed';
import { TweetsList } from './list';
import { Tweet } from './tweet';



export const FeedComponent = ({ username, canTweet }) => {
    const textAreaRef = useRef()
    const createPermission = canTweet === 'false' ? false : true
    const [newTweet, setNewTweet] = useState([])
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        apiTweetCreate(textAreaRef.current.value, (response, status) => {
            (status === 201
                ? setNewTweet(response)
                : alert('Произошла ошибка. Попробуйте еще раз')
            )
        })
        textAreaRef.current.value = ''
    }, [])
    return (
        <><Header />
            {createPermission && <div className='createForm'><h2>Добавить твит</h2><form className="formCreateTweet" onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} name="content" id="content" cols="30" rows="5"></textarea>
                <button type="submit">Добавить</button>
            </form></div>}
            <FeedList newTweet={newTweet} setNewTweet={setNewTweet} />
        </>
    )
}




export const TweetsComponent = ({ username, canTweet }) => {
    const textAreaRef = useRef()
    const createPermission = canTweet === 'false' ? false : true
    const [newTweet, setNewTweet] = useState([])
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        apiTweetCreate(textAreaRef.current.value, (response, status) => {
            (status === 201
                ? setNewTweet(response)
                : alert('Произошла ошибка. Попробуйте еще раз')
            )
        })
        textAreaRef.current.value = ''
    }, [])
    return (
        <>
            {createPermission && <div className='createForm'><h2>Добавить твит</h2><form className="formCreateTweet" onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} name="content" id="content" cols="30" rows="5"></textarea>
                <button type="submit">Добавить</button>
            </form></div>}
            <TweetsList username={username} newTweet={newTweet} setNewTweet={setNewTweet} />
        </>
    )
}

export const TweetDetailComponent = (props) => {
    const [tweet, setTweet] = useState(null)
    useEffect(() => {
        apiTweetDetail((response, status) => {
            if (status === 200) {
                setTweet(response)
            } else {
                alert('Какая-то ошибка с поиском вашего твита')
            }
        }, props.tweetId)
    }, [])
    return tweet === null ? null : <Tweet tweet={tweet} />
}