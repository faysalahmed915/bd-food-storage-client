import React, { useEffect, useState } from "react";

const getTimeRemaining = (expiryDate) => {
  const total = Date.parse(expiryDate) - Date.now();

  if (total <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { expired: false, days, hours, minutes, seconds };
};

const ExpiryCountdown = ({ food }) => {
    const { expiryDate } = food;
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(expiryDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(expiryDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (timeLeft.expired) {
    return (
      <span className="badge badge-error text-white">
        Expired
      </span>
    );
  }

  return (
    <div className="text-sm font-medium badge badge-warning text-warning-content">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
    </div>
  );
};

export default ExpiryCountdown;
