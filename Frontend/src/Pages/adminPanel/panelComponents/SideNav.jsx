// SIDEBAR NAVIGATION FOR ADMIN PANEL ---> tres links: vista gral, crud y log
import { Link } from "react-router-dom";
export default function SideNav() {
  return (
    <div className='h-full w-fit'>
      <ul className='flex flex-col justify-end space-x-4'>
        <li>
          <Link to='/user'>Vista General</Link>
        </li>
        <li>
          <Link to='/user/crud'>CRUD</Link>
        </li>
        <li>
          <Link to='/user/log'>Log</Link>
        </li>
      </ul>
    </div>
  );
}
