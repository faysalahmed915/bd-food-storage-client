import { Link } from "react-router";

const StaticSectionTwo = () => (
  <section className="bg-green-400 py-10 px-4 md:px-8 text-center mt-6">
    <h3 className="text-2xl font-semibold mb-4">Start Your Own Group</h3>
    <p className="max-w-2xl mx-auto">
      Can’t find your favorite hobby group? Start one yourself and gather people who share your passion!
    </p>
    <Link to={'/createGroup'} className="btn mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
      Create Group
    </Link>
  </section>
);

export default StaticSectionTwo;
