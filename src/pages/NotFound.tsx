import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="bg-[#F8FAFC] w-full h-screen flex flex-col items-center ">
      <img
        className="w-[85%] h-[30vh] object-contain mt-2 sm:w-[70%] sm:h-[35vh] md:w-[60%] md:h-[40vh] lg:w-[50%] lg:h-[45vh]"
        src="/images/Error.png"
        alt="Not Found"
      />

      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-black text-center mt-4">
        Page not found
      </h1>

      <p className="px-2 sm:px-4 mt-2 max-w-2xl text-center font-semibold text-gray-500 text-base sm:text-lg md:text-xl">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5">
        <Link
          className="w-fit sm:w-auto flex justify-center items-center gap-2 bg-indigo-500 text-white text-base sm:text-lg font-semibold border-2 border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 active:bg-indigo-700 transition-all duration-300"
          to="/todos"
        >
          <MoveLeft /> Back to Todos
        </Link>

        <Link
          className=" w-fit sm:w-auto text-center text-indigo-600 text-base sm:text-lg font-semibold border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 active:bg-indigo-200 transition-all duration-300 "
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
