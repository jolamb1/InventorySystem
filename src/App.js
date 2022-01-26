import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
			<img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey {user.username}, welcome to my app, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;