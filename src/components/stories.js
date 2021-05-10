import React from 'react';
import '../styles/stories.scss';

const Stories = ({ data, SetIsStory }) => {
  return (
    <div className='box'>
      <img
        alt='Instagram'
        className='insta-logo'
        src='https://instagram.com/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png'
        srcset='/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x'
      ></img>
      <div className='container'></div>
      <svg
        onClick={() => {
          SetIsStory(false);
        }}
        aria-label='Close'
        className='close-logo'
        fill='#ffffff'
        height='24'
        viewBox='0 0 48 48'
        width='24'
      >
        <path
          clip-rule='evenodd'
          d='M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z'
          fill-rule='evenodd'
        ></path>
      </svg>
    </div>
  );
};

export default Stories;
