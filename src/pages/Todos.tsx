import { Calendar, Circle, Ellipsis } from 'lucide-react';
const Todos = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <section>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-3 pb-3 px-7 ">
          <div className="flex items-center gap-3">
            <h1 className="text-black text-2xl font-bold">Your Todos </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-indigo-300 rounded-full text-black font-semibold">
              4
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="bg-indigo-100 text-indigo-700 font-semibold rounded-xl px-4 py-2 border-2 border-[#f8f5f5]">
              All
            </button>

            <button className="text-gray-500 font-semibold rounded-xl px-4 py-2 border-2 border-[#f8f5f5]">
              Active
            </button>

            <button className="text-gray-500 font-semibold rounded-xl px-4 py-2 border-2 border-[#f8f5f5]">
              Completed
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3 px-7">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 rounded border-2 py-3 px-3 border-[#f8f5f5]">
            <div className="flex items-start gap-3 pl-1 sm:pl-3 min-w-0">
              <div className="h-5 w-5 border-2 rounded"></div>
              <div className="min-w-0">
                <h3 className="text-black font-bold text-sm sm:text-base ">
                  Complete project documentation
                </h3>
                <p className="text-gray-400 text-sm ">
                  Write and finalize the technical documentation for the todo application
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pr-1 sm:pr-4">
              <div className="text-red-400 text-xs sm:text-sm bg-red-50 rounded-xl font-semibold flex gap-1 sm:gap-2 items-center px-2 py-1">
                <Calendar size={16} />
                <p className="whitespace-nowrap">Sep 24, 2026 5:00</p>
              </div>
              <div className="text-indigo-600 bg-indigo-100 rounded-2xl px-2 sm:px-3 py-1 font-semibold flex gap-1 sm:gap-2 items-center">
                <div className="bg-indigo-700 rounded-full">
                  <Circle size={12} color="#4F46E5" />
                </div>
                <p className="text-xs sm:text-sm whitespace-nowrap">In Progress</p>
              </div>
              <button className="text-gray-500 p-1">
                <Ellipsis size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 rounded border-2 py-3 px-3 border-[#f8f5f5]">
            <div className="flex items-start gap-3 pl-1 sm:pl-3 min-w-0">
              <div className="h-5 w-5 min-w-5 border-2 rounded mt-1"></div>
              <div className="min-w-0">
                <h3 className="text-black font-bold text-sm sm:text-base ">
                  Set up development environment
                </h3>
                <p className="text-gray-400 text-sm ">
                  Install dependencies and configure the development environment
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pr-1 sm:pr-4">
              <div className="text-green-600 bg-green-100 rounded-2xl px-2 sm:px-3 py-1 font-semibold flex gap-1 sm:gap-2 items-center">
                <Circle size={12} />
                <p className="text-xs sm:text-sm whitespace-nowrap">Completed</p>
              </div>
              <button className="text-gray-500 p-1">
                <Ellipsis size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 rounded border-2 py-3 px-3 border-[#f8f5f5]">
            <div className="flex items-start gap-3 pl-1 sm:pl-3 min-w-0">
              <div className="h-5 w-5 border-2 rounded"></div>
              <div className="min-w-0">
                <h3 className="text-black font-bold text-sm sm:text-base ">
                  Complete project documentation
                </h3>
                <p className="text-gray-400 text-sm ">
                  Write and finalize the technical documentation for the todo application
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pr-1 sm:pr-4">
              <div className="text-red-400 text-xs sm:text-sm bg-red-50 rounded-xl font-semibold flex gap-1 sm:gap-2 items-center px-2 py-1">
                <Calendar size={16} />
                <p className="whitespace-nowrap">Sep 24, 2026 5:00</p>
              </div>
              <div className="text-indigo-600 bg-indigo-100 rounded-2xl px-2 sm:px-3 py-1 font-semibold flex gap-1 sm:gap-2 items-center">
                <div className="bg-indigo-700 rounded-full">
                  <Circle size={12} color="#4F46E5" />
                </div>
                <p className="text-xs sm:text-sm whitespace-nowrap">In Progress</p>
              </div>
              <button className="text-gray-500 p-1">
                <Ellipsis size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 rounded border-2 py-3 px-3 border-[#f8f5f5]">
            <div className="flex items-start gap-3 pl-1 sm:pl-3 min-w-0">
              <div className="h-5 w-5 min-w-5 border-2 rounded mt-1"></div>
              <div className="min-w-0">
                <h3 className="text-black font-bold text-sm sm:text-base ">
                  Set up development environment
                </h3>
                <p className="text-gray-400 text-sm ">
                  Install dependencies and configure the development environment
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pr-1 sm:pr-4">
              <div className="text-green-600 bg-green-100 rounded-2xl px-2 sm:px-3 py-1 font-semibold flex gap-1 sm:gap-2 items-center">
                <Circle size={12} />
                <p className="text-xs sm:text-sm whitespace-nowrap">Completed</p>
              </div>
              <button className="text-gray-500 p-1">
                <Ellipsis size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
