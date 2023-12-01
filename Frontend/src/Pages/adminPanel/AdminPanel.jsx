//habria que dejar un Layout para cada una de las tres pestañas: vista gral, crud y log

import { Outlet } from "react-router-dom";
import SideNav from "./panelComponents/SideNav";

export default function AdminPanel() {
  return (
    <div>
      <h1>AdminPanel</h1>
      <SideNav />
      <Outlet />
    </div>
  );
}
