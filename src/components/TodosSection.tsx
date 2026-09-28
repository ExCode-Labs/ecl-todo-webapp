import React from 'react';
import { Clock3, Send, Sparkles } from 'lucide-react';

const TodosSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8">
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-200 px-3 py-1.5 text-sm font-medium text-blue-800">
              <Sparkles size={15} strokeWidth={2} />
              <span>Add a new todo</span>
            </div>

            <h1 className="font-bold text-black sm:text-3xl">What do you want to do?</h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Add a new todo with a title, description and an optional deadline.
            </p>

            <div className="mt-6">
              <input
                maxLength={500}
                placeholder="Enter todo title and description..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm outline-none placeholder:text-gray-400 h-20"
              />
            </div>

            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-500 transition hover:text-blue-600"
              >
                <Clock3 size={20} strokeWidth={2} />
                <span>Add deadline (optional)</span>
              </button>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <span className="text-sm font-medium text-gray-500">0/500</span>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-blue-700"
                >
                  <Send size={20} strokeWidth={1} />
                  <span>Add Todo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodosSection;
