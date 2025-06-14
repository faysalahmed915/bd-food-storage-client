import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
// import Loading from '../Components/Loading/Loading';

const PrivateRout = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user, loading);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 mx-auto mt-10"></div>
        
        // <Loading></Loading>;
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
    // replace={true}
};

export default PrivateRout;