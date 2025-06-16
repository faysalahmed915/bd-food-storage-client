import React from 'react';
import NoItem from '../Components/Foods/NoItem';
import MyItemsTable from '../Components/Foods/MyItemsTable';

const MyItems = () => {
    return (
        <div>
            <MyItemsTable></MyItemsTable>
            <NoItem></NoItem>
        </div>
    );
};

export default MyItems;