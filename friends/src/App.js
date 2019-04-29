import React from 'react';
import {Route} from 'react-router-dom';
import friendsLogo from './Friends_logo.png';
import friends from './friends.png';
import './App.scss';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={friends} className="friends" alt="friends" />
        <img src={friendsLogo} className="App-logo" alt="logo" />
        <Route path={'/login'} component={Login} />
      </header>
    </div>
  );
}

export default App;
