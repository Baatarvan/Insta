import React from 'react';
import '../styles/post.scss';
import 'materialize-css/dist/css/materialize.min.css';

import { ReactComponent as Heart } from '../assets/Heart.svg';
import { ReactComponent as Chat } from '../assets/chat.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import { ReactComponent as Comment } from '../assets/comment.svg';
import { ReactComponent as Dots } from '../assets/dots.svg';
import { ReactComponent as Face } from '../assets/face.svg';

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
  return (
    <div>
      {posts.map((item) => {
        return (
          <div>
            <div class='card'>
              <div class='row'>
                <div class='col s2 m1 l1 avatarContainer'>
                  <img
                    className='avatar'
                    class='circle'
                    src={item.avatar}
                  ></img>
                </div>
                <div class='col s8 m10 l10'>
                  <span class='black-text'>
                    <p>{item.name}</p>
                  </span>
                </div>
                <div class='col s2 m1 l1 right'>
                  <Dots />
                </div>
              </div>
              <div class='card-image'>
                <img className='postImg' class='activator' src={item.image} />
              </div>
            </div>
            <div class='card-content'>
              <div className='icons'>
                <Heart />
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
                <Face className='face' />
                <input placeholder='add a comment'></input>
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
