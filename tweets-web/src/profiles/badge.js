import React, { useEffect, useState } from 'react';
import { apiProfileDetail, apiProfileFollowToggle } from '../lookup';
import { UserProfile } from './components';



export const ProfileBadge = ({ user, handleFollowToggle, profileUpdating, action }) => {
    const handleEditButtonClick = (event) => {
        event.preventDefault()
        window.location.href = '/profile/edit'
    }
    return (user
        && <div className='profile'>
            <UserProfile user={user} hideLink={true} />
            <div className="profile__buttons">
                <button disabled={profileUpdating} onClick={(event) => handleFollowToggle(event)}>
                    {action === 'Unfollow' ? 'Отписаться' : 'Подписаться'}
                </button>
                <button disabled={profileUpdating} onClick={(event) => handleEditButtonClick(event)}>
                    Редактировать
                </button>
            </div>
        </div>
    )
}


export const ProfileBadgeComponent = ({ username }) => {
    const [profile, setProfile] = useState(null)
    const [profileUpdating, setProfileUpdating] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [action, setAction] = useState(null)
    const action_verb = action && action ? 'Unfollow' : 'Follow'
    useEffect(() => {
        const handleData = (response, status) => {
            if (status === 200) {
                setAction(response.is_following)
                setProfile(response)
                setMounted(true)
            }
        }
        setMounted(false)
        apiProfileDetail(handleData, username)
    }, [username])

    const handleFollowToggle = (event) => {
        event.preventDefault()
        setProfileUpdating(true)
        const handleResponse = (response, status) => {
            if (status === 200) {
                setProfile(response)
                setAction(response.is_following)
                setProfileUpdating(false)
            }
        }
        apiProfileFollowToggle(handleResponse, username, action_verb)
    }

    return mounted
        ? profile !== null && <ProfileBadge user={profile} action={action_verb} profileUpdating={profileUpdating} handleFollowToggle={handleFollowToggle} />
        : <h3>Загружается...</h3>
}