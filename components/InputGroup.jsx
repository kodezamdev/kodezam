export default function InputGroup({ label, children }) {
  return (
    <label className="block py-2 w-full relative">
      <span className="text-gray-700">{label}</span>
      {children}
    </label>
  );
}
