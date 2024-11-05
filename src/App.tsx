// This project uses a template and components from Material-UI (MUI), 
// which are open-source and provided under the MIT license.
// For more information, visit: https://mui.com/

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import AuthenticationProvider from './components/AuthenticationProvider';
import PasswordProtection from './components/PasswordProtection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthenticationProvider>
      {!isAuthenticated ? (
        <PasswordProtection onAuthSuccess={handleAuthSuccess} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </AuthenticationProvider>
  );
}

export default App;



/*
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import AuthenticationProvider from './components/AuthenticationProvider';

function App() {
  return (
    <AuthenticationProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
*/
