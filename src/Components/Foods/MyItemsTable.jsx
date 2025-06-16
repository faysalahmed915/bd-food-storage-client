import React from 'react';
import { Link } from 'react-router';

const MyItemsTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Added Date</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* //                             {myGroups.map((group, index) => ( */}
                    <tr>
                        {/* <td>{1}</td>
                        <td>{group.groupName}</td>
                        <td>{group.hobbyCategory}</td>
                        <td>{group.maxMembers}</td>
                        <td>{group.startDate}</td>
                        <td>{group.location}</td> */}

                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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
                    {/* ) */}

                    {/* )} */}
                </tbody>
            </table>
        </div>
    );
};

export default MyItemsTable;