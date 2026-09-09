import { Check, Search, Plus, Bell, ChevronDown, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-8 py-3.5">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-indigo-500">
            <Check className="h-4.5 w-4.5 text-white" strokeWidth={3} />
          </div>
          <span className="text-[19px] font-bold text-gray-900">Todo App</span>
        </div>

        <div className="hidden md:flex items-center gap-7 cursor-pointer">
          <span>Todos</span>
          <span>Dashboard</span>
          <span>AI Assistant</span>
          <span>About</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-2 w-56 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2">
          <Search className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search todos..."
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        <button className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 cursor-pointer ">
          <Plus className="h-4 w-4" />
          Add Todo
        </button>

        <button className="cursor-pointer">
          <Bell className="h-5.5 w-5.5 text-gray-600" />
        </button>

        <button className="cursor-pointer">
          <User className="h-6 w-6 text-gray-600" />
        </button>
        <button className="cursor-pointer">
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
