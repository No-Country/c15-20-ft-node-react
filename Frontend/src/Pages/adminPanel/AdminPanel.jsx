import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";

export default function AdminPanel() {

    return (
        <div className="flex h-screen">
          <div className="w-1/8 bg-gray-200">
            <SideNav />
          </div>
          <div className="w-7/8 flex flex-col">
            <h1 className="text-4xl text-center py-4">AdminPanel</h1>
            <div className="flex-grow">
              <Outlet />
            </div>
          </div>
        </div>
      );
};
