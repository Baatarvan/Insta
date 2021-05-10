import React from 'react';
import '../styles/story.scss';

const Stories = ({ data, SetIsStory }) => {
  return (
    <ul>
      {data.map((item) => {
        if (item.name.length > 10) {
          item.name = item.name.substring(0, 10) + '...';
        }
        return (
          <li className='storyContainer'>
            <img
              className='circle'
              src={item.image}
              alt='img'
              onClick={() => {
                SetIsStory(true);
              }}
            ></img>
            <div className='storyName'>{item.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

const Story = ({ data, SetIsStory }) => {
  return (
    <nav className='storyNav'>
      <div className='leftBtn'></div>
      <Stories data={data} SetIsStory={SetIsStory} />
      <div className='rightBtn'></div>
    </nav>
  );
};

export default Story;
