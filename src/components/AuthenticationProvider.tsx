import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust path as needed

// Define the types for the session object
interface UserSession {
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

// Create context for authentication
export const SessionContext = createContext<UserSession | null>(null);
export const AuthenticationContext = createContext<{
  signIn: () => void;
  signOut: () => void;
}>({
  signIn: () => {},
  signOut: () => {}
});

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
  const [session, setSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession({
          user: {
            name: user.displayName || user.email,
            email: user.email,
            image: user.photoURL || null
          }
        });
      } else {
        setSession(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const authentication = {
    signIn: () => {
      // Implement sign-in methods if needed
    },
    signOut: () => {
      auth.signOut().then(() => setSession(null));
    }
  };

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        {children}
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
