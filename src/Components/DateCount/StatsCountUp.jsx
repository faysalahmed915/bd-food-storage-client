import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ExpiryCountdown from "./ExpiryCountdown";
import ExpiringFoodCard from "../Foods/ExpiringFoodCard";

const StatsCountUp = ({ allFoods }) => {
  const [now, setNow] = useState(new Date());

  // 🕒 Keep current time updated every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fiveDaysLater = new Date(now);
  fiveDaysLater.setDate(now.getDate() + 5);

  const expiredFoods = allFoods.filter(
    (food) => new Date(food.expiryDate) < now
  );

  const nearlyExpiredFoods = allFoods.filter((food) => {
    const expiry = new Date(food.expiryDate);
    return expiry > now && expiry <= fiveDaysLater;
  });

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="my-8 max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4 text-primary text-center">
        Current Time: {formatTime(now)}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Expired Foods */}
        <div className="stat bg-base-200 shadow border border-red-300 rounded-lg">
          <div className="stat-title text-error">Expired Foods</div>
          <div className="stat-value text-error text-4xl">
            <CountUp end={expiredFoods.length} duration={2} />
          </div>
          <div className="stat-desc">Total expired items</div>
        </div>

        {/* Nearly Expired Foods */}
        <div className="stat bg-base-200 shadow border border-warning rounded-lg">
          <div className="stat-title text-warning">Nearly Expired (Next 5 Days)</div>
          <div className="stat-value text-warning text-4xl">
            <CountUp end={nearlyExpiredFoods.length} duration={2} />
          </div>
          <div className="stat-desc">Expiring within 5 days</div>
        </div>
      </div>
      <p className="mt-2">
        <h1 className="text-2xl font-bold my-4 text-center">Items Expiring Soon</h1>

        {!nearlyExpiredFoods.length && 'No items expiring in the next 5 days.'}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {nearlyExpiredFoods.map(food => <ExpiringFoodCard food={food} />)}
        </div>

      </p>
    </div>
  );
};

export default StatsCountUp;
