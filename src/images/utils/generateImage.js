import React from 'react';

const generateImage = fileName =>
  import(`../${fileName}`)
    .then(module =>
      props => (
        <img src={module} alt={fileName} />
      )
    )
    .catch(console.error.bind(console));

export default generateImage;
