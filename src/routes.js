import Index from './views/Index.js';
import Profile from './views/Profile';
import Employees from './views/Employees';
import Departments from './views/Departments';
import SalaryStructure from './views/SalaryStructure'
import Payslip from './views/Payslip';
import Payroll from 'components/Payroll/Payroll.jsx';

const routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-blue',
    component: Profile,
    layout: '/admin'
  }
];

export const employeeRoutes = [
  {
    path: '/employees',
    name: 'Employees',
    icon: 'fas fa-users text-blue',
    component: Employees,
    layout: '/admin'
  },
  {
    path: '/departments',
    name: 'Departments',
    icon: 'ni ni-building text-blue',
    component: Departments,
    layout: '/admin'
  },
  {
    path: '/salary-structure',
    name: 'Salary Structure',
    icon: 'ni ni-chart-bar-32 text-blue',
    component: SalaryStructure,
    layout: '/admin'
  },
  {
    path: '/leaves',
    name: 'Leaves',
    icon: 'ni ni-user-run text-blue',
    component: Profile,
    layout: '/admin'
  },
  {
    path: '/attendance',
    name: 'Attendance',
    icon: 'fas fa-calendar-check text-blue',
    component: Profile,
    layout: '/admin'
  }
];

export const hrRoutes = [
  {
    path: '/accounts',
    name: 'Accounts',
    icon: 'fas fa-file-invoice-dollar text-blue',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/taxes',
    name: 'Taxes',
    icon: 'ni ni-spaceship text-blue',
    component: Profile,
    layout: '/admin'
  },
  {
    path: '/payroll',
    name: 'Payroll',
    icon: 'fas fa-funnel-dollar text-primary',
    component: Payroll,
    layout: '/admin',
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-blue",
    component: Profile,
    layout: "/admin",
  },
  {
    path: '/arrears',
    name: 'Arrears',
    icon: 'ni ni-support-16 text-primary',
    component: Index,
    layout: '/admin'
  },
  {
    path: '/payslip',
    name: 'Payslip',
    icon: 'ni ni-book-bookmark text-blue',
    component: Payslip,
    layout: '/admin'
  }
];

export const administrationRoutes = [

];

export default routes;
