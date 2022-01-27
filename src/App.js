import React from 'react';
import './App.css';
import AddItems from './AddItems'
import AddLocation from './AddLocation'
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
		
	return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
			<AddItems />
			<AddLocation />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;