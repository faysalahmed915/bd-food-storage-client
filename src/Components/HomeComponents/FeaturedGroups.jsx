// import { useEffect, useState } from 'react';
// import GroupCard from './GroupCard';

const FeaturedGroups = () => {
//   const [groups, setGroups] = useState([]);

//   useEffect(() => {
//     fetch('https://your-server-url/groups?featured=true')
//       .then(res => res.json())
//       .then(data => setGroups(data.slice(0, 6))); // limit to 6
//   }, []);

  return (
    <section className="my-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Hobby Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* {groups.map(group => (
          <GroupCard key={group._id} group={group} />
        ))} */}

      </div>
    </section>
  );
};

export default FeaturedGroups;
