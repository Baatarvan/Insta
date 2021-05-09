import React from 'react';
import '../styles/navigation.scss';
import 'materialize-css/dist/css/materialize.min.css';
import { ReactComponent as FindPeople } from '../assets/findPeople.svg';
import { ReactComponent as Messenger } from '../assets/messenger.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';

const Navigation = () => {
  return (
    <nav>
      <div className='nav-wrapper container'>
        <a href='#' className='brand-logo left'>
          <img
            alt='Instagram'
            className='s4Iyt'
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            srcset='/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x'
          ></img>
        </a>
        <a href='#' className='brand-logo center hide-on-small-only'>
          <form>
            <div className='input-field'>
              <input placeholder='Search' id='search' type='search' required />
              <label className='label-icon' for='search'>
                <i className='material-icons'>search</i>
              </label>
              <i class='material-icons'>close</i>
            </div>
          </form>
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <a href='#!'>
              <path d='M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z'></path>
            </a>
          </li>
          <li>
            <a href='#!'>
              <Messenger />
            </a>
          </li>
          <li>
            <a href='#!'>
              <FindPeople />
            </a>
          </li>
          <li>
            <a href='#!'>
              <Heart />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
