import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const LogIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReseting = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const AllnewUpdatePass = (newPassword) => {
        return updatePassword(user, newPassword);
    }

    const UserVerifyFunction = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const userInfo = {
        user,
        signUpWithEmail,
        updateUser,
        LogIn,
        logOut,
        passwordReseting,
        AllnewUpdatePass,
        UserVerifyFunction,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;