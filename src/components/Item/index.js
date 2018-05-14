import React from 'react';

const Item = props => {
  const { image, name } = props;
  console.log(image);
  return (
    <div>
      <div>{ name }</div>
      <div>{ image }</div>
    </div>
  );
}

export default Item;
