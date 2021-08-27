import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  // Hooks
  // --state
  // ----global
  const userContext = useContext(UserContext);
  const { state } = userContext;

  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {!state.user.name && (
            <li>
              <Link to='/register'>Register</Link>
            </li>
          )}
          {state.user.name && (
            <li>
              <Link to='/account'>Account</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
