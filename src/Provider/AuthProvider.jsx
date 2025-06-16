import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import { updateProfile as firebaseUpdateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';





export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleUser = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleUser)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // const resetPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    // }

    const updateUserProfile = (profile) => {
        return firebaseUpdateProfile(auth.currentUser, profile);
    };

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        resetPassword,
    };
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;