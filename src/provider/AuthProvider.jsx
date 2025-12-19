import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  })
  
  const AuthData = {
    user,
    setUser,
    auth,
    createUser,

  };
  return <AuthContext value={AuthData}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
