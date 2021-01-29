import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserSessionContextProvider from './context/UserContext';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <UserSessionContextProvider style={{height: "100%"}}>
        <Router>
          <Route exact path="/" render={props => <Landing {...props}/>} />
        </Router>

      </UserSessionContextProvider>
    </div>
  );
}

export default App;
