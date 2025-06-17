import React from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ItemRow = ({ item, key }) => {

    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = item;
const navigate = useNavigate()

     const handleDelete = () => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/fridge/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });

                navigate('/Myitems')
            }
        });
    }
    return (
        <tr>
            <td>{key + 1}</td>
            <td className='text-left'>{title.toUpperCase()}</td>
            <td className='text-left'>{category}</td>
            <td>{quantity}</td>
            <td>{new Date(addedDate).toLocaleDateString()}</td>
            <td>{new Date(expiryDate).toLocaleDateString()}</td>
            <td>{new Date(expiryDate) < new Date() ? 'Expired' : 'Fresh'}</td>
            <td>
                <Link>
                    <button className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition mr-2">Update</button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}

                    className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ItemRow;