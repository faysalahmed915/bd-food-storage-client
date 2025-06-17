import React, { Suspense, use } from 'react';
import MyItemsInterface from '../Components/Foods/MyItemsInterface';
import { AuthContext } from '../Provider/AuthProvider';
import UserFridgeApi from '../api/UserFridgeApi';

const MyItems = () => {
    const { user } = use(AuthContext);
    const { myItemsPromise } = UserFridgeApi();

    return (
        <div>
            <Suspense fallback={'loading your items...'}>
                <MyItemsInterface myItemsPromise={myItemsPromise(user.email)}></MyItemsInterface>
            </Suspense>
        </div>
    );
};

export default MyItems;