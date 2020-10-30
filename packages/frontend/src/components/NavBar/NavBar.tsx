import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          - <Link to="/">Home</Link>
          <br />
        </li>
      </ul>

      <br />
      <br />
      <br />
    </div>
  );
};

export default NavBar;
