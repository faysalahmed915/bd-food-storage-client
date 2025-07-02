import React from "react";

const UpcomingExpiringFoods = ({ allFoods }) => {
  const now = new Date();
  const weekLater = new Date();
  weekLater.setDate(now.getDate() + 7);

  const upcoming = allFoods.filter(food => {
    const expiry = new Date(food.expiryDate);
    return expiry > now && expiry <= weekLater;
  });

  if (upcoming.length === 0) return null;

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4 text-center text-secondary">Upcoming Expiries (Next 7 Days)</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {upcoming.map(food => (
          <div key={food._id} className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">{food.name}</h3>
              <p className="text-sm text-gray-500">Expires on: {new Date(food.expiryDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExpiringFoods;
