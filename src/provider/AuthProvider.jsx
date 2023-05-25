import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from './../Firebase/firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;