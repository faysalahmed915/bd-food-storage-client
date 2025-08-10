import { Link } from "react-router";
import { FaRecycle } from "react-icons/fa";

const FoodWastePromo = () => {
  return (
    <section className="bg-base-200 py-10 px-4 md:px-8 rounded-2xl shadow-lg my-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        
        {/* Left: Big fact */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Every year, Bangladesh wastes <span className="text-yellow-600">4 million tons</span> of food.
          </h2>
          <p className="mt-4 text-lg">
            Imagine how many people could be fed if we saved just a fraction of that.  
            BD Food Storage makes it easy to track, share, and save your food before it’s too late.
          </p>
        </div>

        {/* Right: Action */}
        <div className="flex-1 flex flex-col items-center justify-center text-center bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
          <FaRecycle className="text-[#176AE5] text-5xl mb-4" />
          <p className="mb-6 font-medium">
            Start making a difference today — one fridge at a time.
          </p>
          <Link
            to="/fridge"
            className="bg-[#176AE5] text-white px-6 py-3 rounded-full hover:bg-[#145bcc] transition-all shadow-md"
          >
            Save My Food
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodWastePromo;
