import React from 'react';
import { Winner } from '../Icons';
import './WinnerList.css';

const WinnerList = props => (
  <div className="winner-list">
    <h1>Winners!</h1>
    <div className="winner-list__icon">
      <Winner />
    </div>
    <div className="winner-list__names">
      {props.items.map(item => (<p key={item.name}>{`- ${item.name}`}</p>))}
    </div>
  </div>
)

export default WinnerList;
