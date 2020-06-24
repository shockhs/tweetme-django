import React, { useState } from 'react';
import noAvatar from '../images/no_avatar.png';
import '../styles/tweets.css';
import { ActionBtn } from './buttons';


const UserPicture = ({ user }) => {
    return (
        <div className="tweets__item-header-avatar">
            <a href={`/profile/${user.username}`}>
                <img src={noAvatar} alt="user avatar" />
            </a>
        </div>
    )
}

const UserLink = ({ user }) => {
    const fullName = `${user.first_name} - ${user.last_name}`
    return (
        <div className="tweets__item-header-link">
            <a href={`/profile/${user.username}`}>
                {fullName}
            </a>
            <span>@{user.username}</span>
        </div >
    )
}

const TweetWithParent = ({ tweet, setNewTweet }) => {
    const fullName = `${tweet.user.first_name} - ${tweet.user.last_name}`
    return <div className="tweets__parent">
        <header className="tweets__parent-header">
            <div className="tweets__parent-header-avatar">
                <a href={`/profile/${tweet.user.username}`}>
                    <img src={noAvatar} alt="user avatar" />
                </a>
            </div>
            <div className="tweets__parent-header-link">
                <a href={`/profile/${tweet.user.username}`}>
                    {fullName !== ' - ' ? fullName : 'Без имени'}
                </a>
                <span className="tweets__parent-header-link-username">@{tweet.user.username}</span>
            </div >
        </header>
        <main className="tweets__parent-content">
            {tweet.content}
        </main>
    </div>
}




const TweetComponent = ({ tweet, setNewTweet }) => {
    const [didPerformAction, setDidPerformAction] = useState(true)
    const match = window.location.pathname.match(/(?<tweetId>\d+)/)
    const tweetIdPath = match ? match.groups.tweetId : null
    const [numberOfLikes, setNumberOfLikes] = useState(tweet.likes)
    const isDetail = tweetIdPath && tweetIdPath === `${tweet.id}` ? true : false
    return <div className="tweets__item">
        <header className="tweets__item-header">
            <UserPicture user={tweet.user} />
            <UserLink user={tweet.user} />
        </header>
        <main className="tweets__item-content">
            {tweet.parent ? <><span className="tweets__item-content-retweet">Retweet from</span><TweetWithParent tweet={tweet.parent} setNewTweet={setNewTweet} /></> : tweet.content}
        </main>
        <footer className="tweets__item-footer">
            <div className="tweets__item-footer-counter">
                {numberOfLikes}
            </div>
            <div className="tweets__item-footer-actions">
                {didPerformAction
                    ? <ActionBtn setDidPerformAction={setDidPerformAction} setNumberOfLikes={setNumberOfLikes} tweet={tweet} action='like' />
                    : <ActionBtn setDidPerformAction={setDidPerformAction} setNumberOfLikes={setNumberOfLikes} tweet={tweet} action='unlike' />}
                <ActionBtn tweet={tweet} setNewTweet={setNewTweet} action='retweet' />
            </div>

            {isDetail ? null : <a className="tweetLink" href={`tweets/${tweet.id}`}>Подробнее</a>}
        </footer>
    </div>
}



export const Tweet = ({ tweet, setNewTweet }) => {
    return <TweetComponent tweet={tweet} setNewTweet={setNewTweet} />
}
