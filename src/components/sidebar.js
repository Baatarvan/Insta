import React from 'react';
import '../styles/sidebar.scss';
import Suggestions from './suggestions';

const sidebar = (props) => {
  return (
    <div className='sidebar hide-on-med-and-down'>
      <div className='accountSwitch'>
        <img className='circle' src='https://i.pravatar.cc/150?img=11'></img>
        <div className='account'>
          <h6 className='username'>Baatarvan</h6>
          <p className='firstname'>Baatarvan</p>
        </div>
        <p>Switch</p>
      </div>
      <Suggestions data={props.data} />
    </div>
  );
};

export default sidebar;
