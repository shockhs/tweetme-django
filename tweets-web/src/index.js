import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ProfileBadgeComponent } from './profiles';
import * as serviceWorker from './serviceWorker';
import { FeedComponent, TweetDetailComponent } from './tweets';
const rootElement = document.getElementById('tweetme')

if (rootElement) {
  const data = JSON.parse(JSON.stringify(rootElement.dataset))
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={data} />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}


const tweetDetailElements = document.querySelectorAll('.tweetme-detail')
if (tweetDetailElements) {
  tweetDetailElements.forEach(container => {
    ReactDOM.render(
      React.createElement(TweetDetailComponent, container.dataset),
      container)
  })
}

const tweetFeedElement = document.getElementById('tweetme-feed')
if (tweetFeedElement) {
  ReactDOM.render(
    React.createElement(FeedComponent, tweetFeedElement.dataset),
    tweetFeedElement)
}

const userProfileBadgeElement = document.getElementById('tweetme-profile-badge')
if (userProfileBadgeElement) {
  ReactDOM.render(
    React.createElement(ProfileBadgeComponent, userProfileBadgeElement.dataset),
    userProfileBadgeElement)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
