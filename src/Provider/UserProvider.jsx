import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useSecureUserApi from '../api/SecureUserApi';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // const { user } = useContext(AuthContext);
    // const { getCurrentUser } = useSecureUserApi();
    // const [userData, setUserData] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (!user?.email) return;

    //     getCurrentUser(user?.email)
    //         .then(data => setUserData(data))
    //         .finally(() => setLoading(false));
    // }, [user?.email]);

    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
