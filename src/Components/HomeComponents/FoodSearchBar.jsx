import React from "react";

const FoodSearchBar = ({ onSearch }) => {
  return (
    <div className="form-control w-full max-w-2xl mx-auto my-6">
      <input
        type="text"
        placeholder="🔍 Search food by name..."
        className="input input-bordered input-primary w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default FoodSearchBar;
