import { Link } from "react-router-dom";

export default function SideNav() {

  const linkStyle = "block py-2 px-4 rounded hover:bg-gray-700"

  return (
    <div className="h-full w-1/8 bg-gray-800 text-white">
      <ul className="flex flex-col justify-end space-y-2 p-4">
        <li>
          <Link to="/admin" className={linkStyle}>General</Link>
        </li>
        <li>
          <Link to="/admin/crud" className={linkStyle}>CRUD</Link>
        </li>
        <li>
          <Link to="/admin/log" className={linkStyle}>Log</Link>
        </li>
      </ul>
    </div>
  );
};
