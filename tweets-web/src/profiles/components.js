import numeral from 'numeral';
import React from 'react';
import noAvatar from '../images/no_avatar.png';
import '../styles/profile.css';


const UserFollowsData = ({ followers, following }) => {
    return (
        <div className="profile__badge__main-followers">
            <div className="profile__badge__main-followers-item">
                Подписчики
                <span>{numeral(followers).format('0a')}</span>
            </div>
            <div className="profile__badge__main-followers-item">
                Подписки
                <span>{numeral(following).format('0a')}</span>
            </div>
        </div>
    )
}

const UserPicture = ({ username, hideLink }) => {
    return (hideLink
        ? <div className="profile__badge__main-avatar">
            <img src={noAvatar} alt="no_avatar" />
        </div>
        : <div className="profile__badge__main-avatar">
            <a href={`/profile/${username}`} >
                <img src={noAvatar} alt="no_avatar" />
            </a>
        </div>
    )
}

const UserLink = ({ user, hideLink }) => {
    const fullName = `${user.first_name} - ${user.last_name}`
    return (
        <div className="profile__badge__main-data">
            <span className="profile__badge__main-data-fullname">{fullName}</span>
            <span className="profile__badge__main-data-username">{hideLink ? `@${user.username}` : <a href={`/profile/${user.username}`}> @{user.username} </a>}</span>
        </div>
    )
}



export const UserProfile = ({ user, hideLink }) => {
    return (
        <div className="profile__badge">
            <UserPicture username={user.username} hideLink={hideLink} />
            <div className="profile__badge__main">
                <UserLink user={user} hideLink={hideLink} />
                <UserFollowsData followers={user.follower_count} following={user.following_count} />
            </div>
        </div>
    )
}
