export default function Button({ children, extraStyles, ...attributes }) {
  return (
    <button
      type='button'
      className={`  px-4 py-2 text-white font-semibold rounded capitalize bg-black transition-all hover:outline outline-sky-500 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-slate-700 disabled:outline-0 disabled:border-slate-200 disabled:shadow-none ${extraStyles}`}
      {...attributes}
    >
      {children}
    </button>
  );
}
