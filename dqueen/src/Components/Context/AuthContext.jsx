import React, { useState } from "react";
export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });
  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token,
    });
  };
  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };
  return (
    <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
