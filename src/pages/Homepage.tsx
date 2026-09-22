import {
  Check,
  Sparkles,
  ListSortAscending,
  Calendar,
  Zap,
  CircleCheck,
  LoaderCircle,
  MoveRight,
} from 'lucide-react';
import { Button } from '@excodelabs/ui';
const Home = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-4">
        <div className="w-full px-4 sm:px-6 lg:px-10 mt-8 md:ml-10 ">
          <span className="w-fit bg-indigo-100 font-semibold text-indigo-700 px-2 py-1 rounded-full text-xs">
            ✦ Get things done, smarter
          </span>

          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl text-black font-bold">
            Your Tasks.
          </h1>

          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-indigo-600 font-bold">
            One Smarter Way.
          </h1>

          <p className="text-gray-400 text-[16px] sm:text-lg lg:text-xl font-semibold max-w-xl">
            Organize your work, stay focused, and let AI help you get more done. Simple, fast, and
            built for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5">
            <Button>
              <MoveRight />
              Go to Todos
            </Button>
            <Button className="border-indigo-300 text-indigo-700" variant={'outline'}>
              <Sparkles />
              Try AI Assistant
            </Button>
          </div>
        </div>

        <div className="w-full sm:w-[80%] lg:w-[90%] mt-6 lg:mr-15">
          <img
            className="w-full h-auto object-contain rounded-2xl"
            src="/images/Illustration.png"
            alt="Illustration"
          />
        </div>
      </section>

      <section className=" flex flex-col  sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-22 md:gap-10 mt-4 mx-4">
        <div className=" border-2 border-[#f8f5f5] p-3 rounded-xl w-full max-w-full sm:w-70 ">
          <div className="h-10 w-10 p-2 bg-indigo-100 text-indigo-700 rounded-xl">
            <Check />
          </div>

          <h3 className="text-black font-bold mt-1 mb-1">Manage Todos</h3>

          <p className="text-gray-400 text-[15px] font-semibold mt-1 mb-1">
            Create, update and organize your tasks with ease.
          </p>
        </div>

        <div className=" border-2 border-[#f8f5f5] p-3 rounded-xl w-full max-w-full sm:w-70 ">
          <div className="h-10 w-10 p-2 bg-[#f0ddfa] text-indigo-700 rounded-xl">
            <Sparkles />
          </div>

          <h3 className="text-black font-bold mt-1 mb-1">AI Assistant</h3>

          <p className="text-gray-400 text-[15px] font-semibold mt-1 mb-1">
            Get intelligent help to plan, prioritize and accomplish more.
          </p>
        </div>

        <div className=" border-2 border-[#f8f5f5] p-3 rounded-xl w-full max-w-full sm:w-70">
          <div className="h-10 w-10 p-2 bg-green-100 text-green-700 rounded-xl">
            <ListSortAscending strokeWidth={4} />
          </div>

          <h3 className="text-black font-bold mt-1 mb-1">Track Progress</h3>

          <p className="text-gray-400 text-[15px] font-semibold mt-1 mb-1">
            Stay on top of your goals and see your progress.
          </p>
        </div>

        <div
          className="border-2 border-[#f8f5f5] p-3 rounded-xl w-full
            max-w-full sm:w-70"
        >
          <div className="h-10 w-10 p-2 bg-orange-100 text-orange-700 rounded-xl">
            <Zap />
          </div>

          <h3 className="text-black font-bold mt-1 mb-1">Stay Productive</h3>

          <p className="text-gray-400 text-[15px] font-semibold mt-1 mb-1">
            Focus on what matters and build better habits.
          </p>
        </div>
      </section>

      <section
        className=" flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-around gap-4 mt-4 mx-4 sm:mx-6 lg:mx-14 border-2 
        border-[#f8f5f5] p-4 rounded-xl "
      >
        <div className=" flex gap-2 w-full sm:w-[45%] lg:w-64 pb-4 sm:pb-0 sm:pr-4 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200 ">
          <div className="h-10 w-10 p-2 bg-indigo-100 text-indigo-700 rounded-xl shrink-0">
            <Calendar />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-black">12</h1>
            <span className="text-[13px] font-semibold text-gray-400">Total Todos</span>
          </div>
        </div>

        <div className=" flex gap-2 w-full sm:w-[45%] lg:w-64 pb-4 sm:pb-0 sm:pr-4 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200 ">
          <div className="h-10 w-10 p-2 bg-[#f0ddfa] text-indigo-700 rounded-xl shrink-0">
            <CircleCheck />
          </div>

          <div>
            <h1 className="text-xl font-bold text-black">5</h1>
            <span className="text-[13px] font-semibold text-gray-400">Completed</span>
          </div>
        </div>

        <div className=" flex gap-2 w-full sm:w-[45%] lg:w-64 pb-4 sm:pb-0 sm:pr-4 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200 ">
          <div className="h-10 w-10 p-2 bg-green-100 text-green-700 rounded-xl shrink-0">
            <LoaderCircle />
          </div>

          <div>
            <h1 className="text-xl font-bold text-black">7</h1>
            <span className="text-[13px] font-semibold text-gray-400">In Progress</span>
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-[45%] lg:w-64 sm:border-b-0 sm:border-r-2 lg:border-r-0 border-gray-200">
          <div className="h-10 w-10 p-2 bg-orange-100 text-orange-700 rounded-xl shrink-0">
            <Calendar />
          </div>

          <div>
            <h1 className="text-xl font-bold text-black">2</h1>
            <span className="text-[13px] font-semibold text-gray-400">Due This Week</span>
          </div>
        </div>
      </section>

      <div className="mt-2 px-2 sm:px-6 md:px-8">
        <p className="text-center text-gray-400 font-semibold text-sm sm:text-[16px] md:text-lg">
          "Small steps every day lead to big results."
        </p>

        <div className="mx-auto mt-2 h-1 w-12 sm:w-16 rounded-full bg-indigo-600"></div>
      </div>
    </div>
  );
};

export default Home;
