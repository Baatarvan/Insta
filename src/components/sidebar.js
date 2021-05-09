import React from 'react';
import '../styles/sidebar.scss';
import Suggestions from './suggestions';
import Copyright from './copyright';

const sidebar = (props) => {
  return (
    <div className='sidebar'>
      <div className='accountSwitch'>
        <img
          className='circle'
          src='https://i.pravatar.cc/150?img=15'
          alt='img'
        ></img>
        <div className='account'>
          <h6 className='username'>baatar04</h6>
          <p className='firstname'>Baatarvan</p>
        </div>
        <p>Switch</p>
      </div>
      <Suggestions data={props.data} />
      <Copyright />
    </div>
  );
};

export default sidebar;
