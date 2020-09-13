
import Dashboard from './dashboard';
import AdminHeader from './adminHeader';
import SideBar from './Sidebar';

export const routes = [
  { path: '/admin', component: Dashboard },
  { path: '/header', component: AdminHeader },
  { path: '/sidebar', component: SideBar }
  
];