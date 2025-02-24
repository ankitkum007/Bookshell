// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  let initialAuthUser = null;
  try {
    const storedUser = localStorage.getItem("Users");
    initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing stored user data:", error);
  }

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
