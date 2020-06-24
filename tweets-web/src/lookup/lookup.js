import { backendLookup } from '../lookup'

export const apiTweetList = (callback,username,nextUrl) => {
    let endpoint = 'tweets'
    if (username) {
        endpoint = `tweets/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace('http://127.0.0.1:8000/api/', '')
    }
    backendLookup('GET', endpoint, callback)
}

export const apiTweetFeed = (callback, nextUrl) => {
    let endpoint = 'tweets/feed/'
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace('http://127.0.0.1:8000/api/', '')
    }
    backendLookup('GET', endpoint, callback)
}


export const apiTweetDetail = (callback, tweetId) => {
    backendLookup('GET', `tweets/${tweetId}`, callback)
}


export const apiTweetCreate = (newTweet, callback) => {
    const data = { 'content': newTweet }
    backendLookup('POST', 'tweets/create/', callback, data)
}

export const apiTweetAction = (tweetId, action, callback) => {
    const data = { 'id': tweetId, 'action': action }
    backendLookup('POST', 'tweets/action/', callback, data)
}

export const apiProfileDetail = (callback, username) => {
    backendLookup('GET', `profile/${username}/`, callback)
}

export const apiProfileFollowToggle = (callback, username,action) => {
    const data = { 'action': `${action && action}`.toLowerCase() }
    backendLookup('POST', `profiles/${username}/follow`, callback,data)
}

