import React from 'react';
import Navigation from './components/navigation';
import Post from './components/post';
import Story from './components/story';
import Data from './components/data';

const App = () => {
  return (
    <div>
      <Navigation />
      <Story data={Data} />
      <Post
        img='https://materializecss.com/images/sample-1.jpg'
        avatar='https://www.w3schools.com/howto/img_avatar.png'
        name='ilkhagva'
      />
    </div>
  );
};

export default App;
