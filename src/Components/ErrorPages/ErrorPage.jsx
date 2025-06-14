import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-4">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h1 className="text-6xl font-bold text-red-500 mb-4">{error?.status || 404}</h1>
                <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
                <h1 className="text-6xl font-bold text-red-500 mb-4">Sometimes it works on multiple refresh due to poor vercel server connection</h1>
                <p className="text-gray-500">The page you're looking for doesn't exist.
                    {/* <br />
                    So don't waste time and <span className='text-blue-600 shadow'>learn some code</span>. Go home now */}
                </p>
                <Link to="/">
                <button className="btn btn-outline btn-success mt-2">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;