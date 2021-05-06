import React from 'react';
import Navigation from './components/navigation';
import Post from './components/post.js';

const App = () => {
  return (
    <div>
      <Navigation />
      <Post
        img='https://materializecss.com/images/sample-1.jpg'
        avatar='https://www.w3schools.com/howto/img_avatar.png'
        name='ilkagva'
      />
    </div>
  );
};

export default App;
