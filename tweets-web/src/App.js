import React from 'react';
import { TweetsComponent } from './tweets';


const App = ({data}) => {
  return (
    <>
      <TweetsComponent username={data.username} canTweet={data.canTweet}/>
    </>
  );
}

export default App;
