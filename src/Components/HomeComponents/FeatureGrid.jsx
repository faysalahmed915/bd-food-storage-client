const FeatureGrid = () => {
  const features = [
    {
      title: "Smart Expiry Tracking",
      desc: "Automatically highlights food close to expiry so you never waste a bite.",
      icon: "⏳"
    },
    {
      title: "Data-Driven Stats",
      desc: "Visual insights into food types, expiry patterns, and usage trends.",
      icon: "📊"
    },
    {
      title: "Clean & Intuitive UI",
      desc: "Built with React and DaisyUI — fast, responsive, and beautiful.",
      icon: "✨"
    }
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Why Use Our App?</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="card bg-base-200 shadow-md p-4 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
