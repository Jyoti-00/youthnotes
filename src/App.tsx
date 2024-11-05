// This project uses a template and components from Material-UI (MUI), 
// which are open-source and provided under the MIT license.
// For more information, visit: https://mui.com/

import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import AuthenticationProvider from './components/AuthenticationProvider';

function App() {
  return (
    <AuthenticationProvider> {/* Wrap the entire application in the provider */}
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
