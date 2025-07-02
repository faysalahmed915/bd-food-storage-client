import React, { Suspense, use } from 'react';
import MyItemsInterface from '../Components/Foods/MyItemsInterface';
import { AuthContext } from '../Provider/AuthProvider';
import UserFridgeApi from '../api/UserFridgeApi';

const MyItems = () => {
    const { user } = use(AuthContext);
    const { myItemsPromise } = UserFridgeApi();

    return (
        <section className='px-2 md:px-4 lg:px-8 max-w-7xl mx-auto'>
            <Suspense fallback={'loading your items...'}>
                <MyItemsInterface myItemsPromise={myItemsPromise(user.email)}></MyItemsInterface>
            </Suspense>
        </section>
    );
};

export default MyItems;