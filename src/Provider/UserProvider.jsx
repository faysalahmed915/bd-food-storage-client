import { createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    

    const experiment = 20;

    const UserData = {
        experiment,
    }

    return (
        <UserContext.Provider value={UserData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider