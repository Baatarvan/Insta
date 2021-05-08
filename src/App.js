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
          <Post
            img='https://firebasestorage.googleapis.com/v0/b/insta-51403.appspot.com/o/182637619_114655580738093_4390812202569331591_n.jpg?alt=media&token=622569db-560b-4f9e-ba68-5761c5634424'
            avatar='https://i.pravatar.cc/150?img=11'
            name='Baatarvan'
          />
        </div>
        <div className='col m4 l4'>
          <Sidebar data={Data} />
        </div>
      </div>
    </div>
  );
};

export default App;
