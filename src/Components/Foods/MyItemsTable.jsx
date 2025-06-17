import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import ItemRow from './ItemRow';

const MyItemsTable = ({ myItems }) => {
    console.log(myItems);


     


    return (
        <div className="overflow-x-auto">
            <table className="table w-full border border-base-300  text-center">
                <thead className="bg-base-500">
                    <tr>
                        <th>No</th>
                        <th className='text-left'>Title</th>
                        <th className='text-left'>Category</th>
                        <th>Quantity</th>
                        <th>Added Date</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody>
                    {myItems.map((item, index) => (
                        <ItemRow item={item} key={index} index={index}></ItemRow>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default MyItemsTable;