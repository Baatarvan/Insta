import React, { useEffect, useState } from 'react';
import '../styles/stories.scss';

const Stories = ({ data, SetIsStory }) => {
  const [sid, setSid] = useState(0);
  const [percent, setPercent] = useState(0);
  const [pause, setpause] = useState(false);

  const getPercent = (index) => {
    if (index < sid) {
      return 100;
    }

    if (index === sid) {
      if (percent === 100) {
        setSid(sid + 1);
        setPercent(0);
      }
    }
    return 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) return;
      setPercent((oldPercent) => oldPercent + 1);
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [pause]);

  return (
    <div className='box'>
      <img
        alt='Instagram'
        className='insta-logo'
        src='https://instagram.com/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png'
      ></img>
      <div className='container'>
        <div className='progress-container'>
          {data[0].stories.map((_, index) => (
            <div
              className='progress'
              style={{ width: `${100 / data[0].stories.length}%` }}
            >
              <div
                className='progress-bar'
                style={{ width: `${getPercent(index)}%` }}
              ></div>
            </div>
          ))}
        </div>
        <ul class='collection'>
          <li class='collection-item avatar valign-wrapper'>
            <img src={data[0].image} alt='img' class='circle'></img>
            <span class='title'>{data[0].name}</span>
            <span className='time'>12h</span>
            <a href='#!' class='secondary-content'>
              <svg
                aria-label='Play'
                class='_8-yf5 '
                fill='#ffffff'
                height='16'
                viewBox='0 0 48 48'
                width='16'
              >
                <path d='M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z'></path>
              </svg>
              <svg
                aria-label='Audo is muted.'
                class='_8-yf5 '
                fill='#ffffff'
                height='16'
                viewBox='0 0 48 48'
                width='16'
              >
                <path
                  clip-rule='evenodd'
                  d='M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z'
                  fill-rule='evenodd'
                ></path>
              </svg>
              <span className='storyDots'>···</span>
            </a>
          </li>
        </ul>
      </div>
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
