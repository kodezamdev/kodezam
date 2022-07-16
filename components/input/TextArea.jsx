export default function TextArea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="mt-1 w-full text-slate-400 text-lef bg-white rounded-lg border-gray-300 shadow-sm px-4 focus:border-indigo-300 focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
    ></textarea>
  );
}
