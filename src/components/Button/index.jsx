export default function Button({ className, children }) {
  return (
    <button className={`text-sm px-4 py-1.5 rounded ${className}`}>
      {children}
    </button>
  );
}
