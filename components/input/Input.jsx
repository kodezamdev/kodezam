export default function Input({ type, placeholder }) {
  return (
    <input
      type={type ?? "text"}
      className="mt-1 w-full text-slate-400 text-lef bg-white rounded-lg border-gray-300 shadow-sm px-4 focus:border-indigo-300 focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
    />
  );
}

//  w-full text-left space-x-3 px-4 h-10 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700
