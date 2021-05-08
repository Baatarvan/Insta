import React from 'react';
import Navigation from './components/navigation';
import Post from './components/post';
import Story from './components/story';
import Data from './components/data';
import Sidebar from './components/sidebar';

import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='row container'>
        <div className='col s12 m8 l8'>
          <Story data={Data} />
          <Post />
        </div>
        <div className='col m4 l4'>
          <Sidebar data={Data} />
        </div>
      </div>
    </div>
  );
};

export default App;
