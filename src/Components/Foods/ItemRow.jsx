import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UpdateFoodModal from './updateFoodModal';

const ItemRow = ({ item, index }) => {

    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = item;
    const navigate = useNavigate()

    const [modalOpen, setModalOpen] = useState(false);

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

                fetch(`https://bd-food-storage-server.vercel.app/fridge/${_id}`, {
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
            <td>{index + 1}</td>
            <td className='text-left'>{title.toUpperCase()}</td>
            <td className='text-left'>{category}</td>
            <td>{quantity}</td>
            <td>{new Date(addedDate).toLocaleDateString()}</td>
            <td>{new Date(expiryDate).toLocaleDateString()}</td>
            <td>{new Date(expiryDate) < new Date() ? 'Expired' : 'Fresh'}</td>
            <td className='flex items-center justify-center flex-wrap gap-2'>
                <div>
                    <button className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition mr-2"
                        onClick={() => setModalOpen(true)}>
                        Update
                    </button>
                    <UpdateFoodModal
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                        item={item} />
                </div>
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