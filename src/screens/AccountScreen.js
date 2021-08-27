import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const AccountScreen = () => {
  // Hooks
  // --state
  // ----global
  const userContext = useContext(UserContext);
  const { dispatch } = userContext;

  // --router
  let history = useHistory();

  // Custom func
  const clickHandler = () => {
    dispatch({ type: 'LOGOUT' });

    // redirect to home page
    history.push('/');
  };
  return (
    <>
      <h2>Account Screen</h2>
      <button onClick={clickHandler}>LogOut</button>
    </>
  );
};

export default AccountScreen;
