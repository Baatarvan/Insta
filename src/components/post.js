import React from 'react';
import '../styles/post.scss';
import 'materialize-css/dist/css/materialize.min.css';

import { ReactComponent as Heart } from '../assets/Heart.svg';
import { ReactComponent as Chat } from '../assets/chat.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import { ReactComponent as Comment } from '../assets/comment.svg';

const posts = [
  {
    name: 'Max Mustafa',
    avatar: 'https://i.pravatar.cc/150?img=11',
    image: 'https://www.w3schools.com/css/img_5terre.jpg',
    comment: 'Blanka Hickman',
  },
  {
    name: 'Roan Parry',
    avatar: 'https://i.pravatar.cc/150?img=12',
    image: 'https://www.w3schools.com/css/lights600x400.jpg',
    comment: 'Aqib Coleman',
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
                    <h6>{item.name}</h6>
                  </span>
                </div>
                <div class='col s2 m1 l1 right'>
                  <h4>...</h4>
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
                <span className='right'>
                  <Mark />
                </span>
              </div>
              <div className='flex'>
                <p>Liked by</p>
                <h6>{item.comment}</h6>
                <p>and</p>
                <h6>others</h6>
              </div>
              <p className='postTime'>18 hours ago</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
