import React from 'react';
import '../styles/suggestions.scss';

const suggestions = (props) => {
  return (
    <div className='suggestions'>
      <div className='head'>
        <p className='text1'>Suggestions For You</p>
        <p className='text2'>See All</p>
      </div>
      {props.data.map((item) => {
        return (
          <div className='foot'>
            <div className='accountSwitch'>
              <img className='circle' src={item.image} alt='img'></img>
              <div className='account'>
                <h6 className='username'>{item.name}</h6>
                <p className='followed'>Followed by Matt</p>
              </div>
              <p>Follow</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default suggestions;
