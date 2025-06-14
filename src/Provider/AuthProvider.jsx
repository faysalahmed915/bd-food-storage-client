import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import { updateProfile as firebaseUpdateProfile } from "firebase/auth";
// import Loading from '../Components/Loading/Loading';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [paidId, setPaidId] = useState([]);
    const [balance, setBalance] = useState(10000);
    

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
        return signOut(auth);
    }

    // const resetPassword = (email) => {
    //     return sendPasswordResetEmail(auth, email);
    // }

    const updateUserProfile = (profile) => {
        return firebaseUpdateProfile(auth.currentUser, profile);
    };

    const handlePayment = (id, amount) => {
        console.log(id)
        if (paidId.includes(id)) {
            toast.error("Already paid");
            
            return
        }
        else if (amount > balance) {
            alert("Insufficient balance. Please add money to your account.");
            toast.error("Insufficient balance")
            return
        }
        else {
            setPaidId([...paidId, id]);
            setBalance(balance - amount);
            toast.success("Payment successful");
        }
    }

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
        handlePayment,
        paidId,
        balance,
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