import React from 'react';
import '../styles/story.scss';

const Stories = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        if (item.name.length > 10) {
          item.name = item.name.substring(0, 10) + '...';
        }
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
    <nav className='storyNav'>
      <Stories data={props.data} />
    </nav>
  );
};

export default Story;
