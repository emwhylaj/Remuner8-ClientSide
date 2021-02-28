import Index from './views/Index.js';
import Profile from './views/Profile';
import Employees from './views/Employees';
import Departments from './views/Departments';
import SalaryStructure from './views/SalaryStructure';
import Payslip from './views/Payslip';
import Payroll from './views/Payroll';

import Custom404 from './views/404';

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
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/departments',
    name: 'Departments',
    icon: 'ni ni-building text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/salary-structure',
    name: 'Salary Structure',
    icon: 'ni ni-chart-bar-32 text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/leaves',
    name: 'Leaves',
    icon: 'ni ni-user-run text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/overtime',
    name: 'Overtime and Bonuses',
    icon: 'fas fa-hourglass-end text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/approvals',
    name: 'Approvals',
    icon: 'fas fa-thumbs-up text-blue',
    component: Custom404,
    layout: '/admin'
  }
];

export const hrRoutes = [
  {
    path: '/accounts',
    name: 'Accounts',
    icon: 'fas fa-file-invoice-dollar text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/taxes',
    name: 'Taxes',
    icon: 'ni ni-spaceship text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/payroll',
    name: 'Payroll',
    icon: 'fas fa-funnel-dollar text-primary',
    component: Payroll,
    layout: '/admin'
  },
  {
    path: '/arrears',
    name: 'Arrears',
    icon: 'ni ni-support-16 text-primary',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/payslip',
    name: 'Payslip',
    icon: 'ni ni-book-bookmark text-blue',
    component: Payslip,
    layout: '/admin'
  },
  {
    path: '/employee-salary',
    name: 'Employee Salary',
    icon: 'ni ni-money-coins text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/payroll-items',
    name: 'Payroll Items',
    icon: 'fas fa-money-bill-alt text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/loan-deduction',
    name: 'Loan Deduction',
    icon: 'fas fa-hand-holding-usd text-blue',
    component: Custom404,
    layout: '/admin'
  }
];

export const administrationRoutes = [
  {
    path: '/activities',
    name: 'Activities',
    icon: 'ni ni-spaceship text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/auth',
    name: 'Authentication',
    icon: 'ni ni-key-25 text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'fas fa-user text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'ni ni-settings-gear-65 text-blue',
    component: Custom404,
    layout: '/admin'
  },
  {
    path: 'login',
    name: 'Log Out',
    icon: 'ni ni-curved-next text-blue',
    layout: '/'
  }
];

export default routes;
