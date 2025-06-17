import React, { use } from 'react';
import NoItem from './NoItem';
import MyItemsTable from './MyItemsTable';

const MyItemsInterface = ({ myItemsPromise }) => {
    const myItems = use(myItemsPromise);
    console.log(myItems);
    return (
        <div>
            {myItems.length === 0 ? <NoItem></NoItem> : <MyItemsTable myItems={myItems}></MyItemsTable>}            
        </div>
    );
};

export default MyItemsInterface;