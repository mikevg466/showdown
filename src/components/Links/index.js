import React from 'react';
import { Link } from 'react-router-dom';
import { Brackets, Fire } from '../Icons';
import './Links.css';

const Links = props => (
  <div className="links">
    <div className="page-link">
      <h1>Brackets</h1>
      <Link to="/brackets">
        <Brackets />
      </Link>
    </div>
    <div className="divider">
    </div>
    <div className="page-link">
      <h1>Hot Or Not</h1>
      <Link to="/hotornot">
        <Fire />
      </Link>
    </div>
  </div>
);

export default Links;
