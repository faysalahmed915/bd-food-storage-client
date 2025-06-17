import React from 'react';
import { Link } from 'react-router';

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
                    {/* //                             {myGroups.map((group, index) => ( */}
                    {/* <tr> */}
                    {/* <td>{1}</td>
                        <td>{group.groupName}</td>
                        <td>{group.hobbyCategory}</td>
                        <td>{group.maxMembers}</td>
                        <td>{group.startDate}</td>
                        <td>{group.location}</td> */}

                    {myItems.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td className='text-left'>{item.title.toUpperCase()}</td>
                            <td className='text-left'>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{new Date(item.addedDate).toLocaleDateString()}</td>
                            <td>{new Date(item.expiryDate).toLocaleDateString()}</td>
                            <td>{new Date(item.expiryDate) < new Date() ? 'Expired' : 'Fresh'}</td>
                            {/* <td>{group.userName}</td> */}
                            <td>
                                <Link>
                                    {/* <Link to={`/updateGroup/${group._id}`}> */}
                                    <button className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition mr-2">Add Note</button>
                                </Link>
                                <button
                                    // onClick={() => handleDelete(group._id)}

                                    className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                   
                </tbody>
            </table>
        </div>
    );
};

export default MyItemsTable;