// src/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ role: 'guest' });
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            setUser({ role: decodedToken.sub });
            setLoggedIn(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};
