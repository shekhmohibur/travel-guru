import { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const AuthData = {
    user,
    setUser,
  };
  return <AuthContext value={AuthData}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
