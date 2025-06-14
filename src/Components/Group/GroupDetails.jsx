import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
// import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
// import Swal from 'sweetalert2';

const GroupDetails = ({ onJoin }) => {

  const { user } = useContext(AuthContext);
console.log(user.email)
  // { onJoin, onDelete }
  const navigate = useNavigate();

  const Groups = useLoaderData();
  // console.log(Groups)

  const { _id } = useParams()
  if (!Groups) return null;
  const group = Groups.find(group => group._id === _id);

  // console.log("group er mail", group.userEmail)



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

        fetch(`https://pawsome-hobby-server.vercel.app/createGroup/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log('after delete', data)
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        navigate('/MyGroup')
      }
    });
  }






  const deadlineDate = new Date(group.startDate);
  const now = new Date();
  const isDeadlineOver = now > deadlineDate;

  const deadline = deadlineDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });







  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Image Banner */}
      <div className="w-full md:h-96 lg:max-h-[550px] rounded-2xl overflow-hidden shadow">
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Actions */}
      <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{group.groupName}</h1>

    {
      (user.email===group.userEmail) ? <div className="flex flex-wrap gap-2">
          
          <Link
          to={`/updateGroup/${_id}`}
            className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition"
          >
            Update Group
          </Link>
          <button
            onClick={() => handleDelete(group._id)}
            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
          >
            Delete Group
          </button>
        </div> : <button
            onClick={() => onJoin(group._id)}
            disabled={isDeadlineOver}
            className={`px-4 py-2 rounded-xl transition text-white ${isDeadlineOver
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
              }`}
          >
            Join Group
          </button>
    }

        
        
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-lg">{group.description}</p>

      {/* Prominent Deadline */}
      <div
        className={`mt-6 p-4 rounded-xl shadow-sm flex items-start gap-3 ${isDeadlineOver
          ? 'bg-red-100 border-l-4 border-red-500'
          : 'bg-yellow-100 border-l-4 border-yellow-500'
          }`}
      >
        <span className="text-2xl">
          {isDeadlineOver ? '🚫' : '⏳'}
        </span>
        <div>
          <p
            className={`font-semibold text-lg ${isDeadlineOver ? 'text-red-800' : 'text-yellow-800'
              }`}
          >
            {isDeadlineOver ? 'Joining ended on:' : 'Deadline to Join:'}
          </p>
          <p
            className={`text-base font-medium ${isDeadlineOver ? 'text-red-700' : 'text-yellow-700'
              }`}
          >
            {deadline}
          </p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        <p><strong>📍 Location:</strong> {group.location}</p>
        <p><strong>👥 Max Members:</strong> {group.maxMembers}</p>
        <p><strong>📅 Starts:</strong> {group.startDate}</p>
        <p><strong>👤 Created By:</strong> {group.userName}</p>
        <p><strong>📧 Email:</strong> {group.userEmail}</p>
        <p><strong>🆔 ID:</strong> {group._id}</p>
      </div>


    </div>

  );
};

export default GroupDetails;








// import React from 'react';
// import { useParams } from 'react-router';

// const GroupDetails = () => {
//   const { _id } = useParams()
//   return (
//     <div>
//       GroupDetails
//     </div>
//   );
// };

// export default GroupDetails;