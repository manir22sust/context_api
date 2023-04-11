import { createContext, useState } from "react";

// Creating the context object and passing the default values.
// export const AuthContext = createContext({ status: null, login: () => { } });

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // custom logic
  const [authStatus, setAuthStatus] = useState(false);

  const Login = () => {
    setAuthStatus(!authStatus);
  };
  //using the state to dynamicallly pass the values to the context
  return (
    <AuthContext.Provider value={{ status: authStatus, login: Login }}>
      {children}
    </AuthContext.Provider>
  );
};
