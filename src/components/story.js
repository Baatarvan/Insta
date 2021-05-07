import React from 'react';
import '../styles/story.scss';

const Stories = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <li className='storyContainer'>
            <img className='circle' src={item.image}></img>
            <div className='storyName'>{item.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

const Story = (props) => {
  return (
    <nav className='storyNav container'>
      <Stories data={props.data} />
    </nav>
  );
};

export default Story;
