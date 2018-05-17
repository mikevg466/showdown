import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

const Links = props => (
  <div className="links">
    <Link to="/brackets">Brackets</Link>
    <Link to="/hotornot">Hot Or Not</Link>
  </div>
);

export default Links;
