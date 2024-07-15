
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        role: 'customer', // initial role
    });
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
