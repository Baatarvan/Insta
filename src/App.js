import React, { useState } from 'react';
import Navigation from './components/navigation';
import Post from './components/post';
import Story from './components/story';
import Data from './components/data';
import Sidebar from './components/sidebar';
import Stories from './components/stories';

import './styles/main.scss';

const App = () => {
  const [isStory, SetIsStory] = useState(false);

  return (
    <div>
      {isStory ? (
        <Stories data={Data} SetIsStory={SetIsStory} />
      ) : (
        <div>
          <Navigation />
          <div className='row container'>
            <div className='col s12 m12 l8'>
              <Story data={Data} SetIsStory={SetIsStory} />
              <Post />
            </div>
            <div className='col m4 l4 hide-on-med-and-down'>
              <Sidebar data={Data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
