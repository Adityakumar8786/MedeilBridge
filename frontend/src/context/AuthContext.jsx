//AuthContext.js (for easy identification created by my own ) ; 

import { createContext, useEffect, useState } from "react";
import  api  from "../api/api";


export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
api.get("/me")
      .then(res => {
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);


  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
