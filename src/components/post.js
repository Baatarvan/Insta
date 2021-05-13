import React, { useState } from 'react';
import '../styles/post.scss';
import 'materialize-css/dist/css/materialize.min.css';

import { ReactComponent as Heart } from '../assets/Heart.svg';
import { ReactComponent as Chat } from '../assets/chat.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import { ReactComponent as Comment } from '../assets/comment.svg';
import { ReactComponent as Dots } from '../assets/dots.svg';
import { ReactComponent as Face } from '../assets/face.svg';
import { ReactComponent as RedHeart } from '../assets/redHeart.svg';

const posts = [
  {
    name: 'Max Mustafa',
    avatar: 'https://i.pravatar.cc/150?img=11',
    image: 'https://www.w3schools.com/css/img_5terre.jpg',
    liked: 'Blanka Hickman',
  },
  {
    name: 'Roan Parry',
    avatar: 'https://i.pravatar.cc/150?img=12',
    image: 'https://www.w3schools.com/css/lights600x400.jpg',
    liked: 'Aqib Coleman',
  },
];

const Post = () => {
  const [like, setLike] = useState(true);

  return (
    <div>
      {posts.map((item) => {
        return (
          <div>
            <div className='card'>
              <div className='row'>
                <div className='col s2 m1 l1 avatarContainer'>
                  <img
                    className='avatar'
                    className='circle'
                    src={item.avatar}
                  ></img>
                </div>
                <div className='col s8 m10 l10'>
                  <span className='black-text'>
                    <p>{item.name}</p>
                  </span>
                </div>
                <div className='col s2 m1 l1 right'>
                  <Dots />
                </div>
              </div>
              <div className='card-image'>
                <img className='postImg' class='activator' src={item.image} />
              </div>
            </div>
            <div className='card-content'>
              <div className='icons'>
                {like ? (
                  <Heart
                    onClick={() => {
                      return setLike(false);
                    }}
                  />
                ) : (
                  <RedHeart />
                )}
                <Chat />
                <Comment />
                <Mark className='right' />
              </div>
              <div className='flex'>
                <p>Liked by</p>
                <p className='bold'>{item.liked}</p>
                <p>and</p>
                <p className='bold'>others</p>
              </div>
              <p className='postTime'>18 hours ago</p>
              <div className='comment'>
                <div className='firstElement'>
                  <Face className='face' />
                  <input placeholder='add a comment'></input>
                </div>
                <h6>Post</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
