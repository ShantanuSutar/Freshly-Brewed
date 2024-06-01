import React, { createContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This is where you might fetch the user data from an API or local storage
    const fetchUser = async () => {
      // Fetch user logic here
      const userData = await fetchUserData();
      setUser(userData);
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Optionally save user data to local storage or cookie
  };

  const logout = () => {
    setUser(null);
    // Optionally remove user data from local storage or cookie
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
