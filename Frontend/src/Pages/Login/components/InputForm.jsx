export default function InputForm({ extraStyles = "", ...attributes }) {
  return (
    <input
      {...attributes}
      className={` mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:valid:border-green-500  ${extraStyles}`}
    />
  );
}
