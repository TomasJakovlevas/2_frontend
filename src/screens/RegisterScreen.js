import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const RegisterScreen = () => {
  // Hooks
  // --state
  // ----global
  const userContext = useContext(UserContext);
  const { dispatch } = userContext;

  // ----local
  const [name, setname] = useState('');

  // router
  let history = useHistory();

  // Custom func
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN', name });

    // redirecting to Account page
    history.push('/account');
  };

  return (
    <div>
      <h2>Register Screen</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input type='submit' />
      </form>
    </div>
  );
};

export default RegisterScreen;
