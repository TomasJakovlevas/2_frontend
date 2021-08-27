import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

// screens
import HomeSreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import AccountScreen from './screens/AccountScreen';

// Context
export const UserContext = createContext();

// Global state
const initialState = { user: { name: '' } };
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: { name: action.name } };
    case 'LOGOUT':
      return { user: { name: '' } };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={HomeSreen} />
              <Route exact path='/register' component={RegisterScreen} />
              <Route exact path='/account' component={AccountScreen} />
            </Switch>
          </main>

          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
