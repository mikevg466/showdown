import React from 'react';
import './Item.css';

const Item = props => {
  const { image, name } = props;
  return (
    <div className="item">
      <div className="item__name">{ name }</div>
      <div className="item__image">{ image }</div>
    </div>
  );
}

export default Item;
