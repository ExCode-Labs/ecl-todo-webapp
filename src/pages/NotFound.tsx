import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="bg-[#F8FAFC] w-full h-[80vh] flex flex-col items-center">
      <img className="w-[50%] h-[60%] object-cover mt-10" src="/images/Error.png" alt="Not Found" />

      <h1 className="text-4xl font-bold text-black">Page not found</h1>

      <p className="p-4 font-semibold text-[gray] text-xl">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="flex gap-4">
        <Link
          className="flex justify-center items-center gap-2 bg-indigo-500 text-white text-lg font-semibold mt-1 border-2 px-4 py-2 rounded-lg hover:bg-indigo-600 active:bg-indigo-700 transition-all duration-400"
          to="/todos"
        >
          <MoveLeft /> Back to Todos
        </Link>

        <Link
          className="text-indigo-600 text-lg font-semibold mt-1 border  px-4 py-2 rounded-lg hover:bg-indigo-50 active:bg-indigo-200 transition-all duration-400"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
