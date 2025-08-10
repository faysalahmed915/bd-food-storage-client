import { Link, useRouteError } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 404;

  const getMessage = (code) => {
    switch (code) {
      case 404:
        return "The page you are looking for doesn’t exist.";
      case 500:
        return "Internal server error. Please try again later.";
      case 403:
        return "You don’t have permission to view this page.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-yellow-500 text-5xl" />
        </div>

        {/* Status Code */}
        <h1 className="text-6xl font-bold text-gray-800 mb-2">{status}</h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-6">{getMessage(status)}</p>

        {/* CTA */}
        <Link
          to="/"
          className="inline-block bg-[#176AE5] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#145bcc] transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
