import { NavItem, TNavParentItems } from '@/types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navGeneralItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Tasks',
    url: '/dashboard/tasks',
    icon: 'listTodo',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Apps',
    url: '/dashboard/apps',
    icon: 'package',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Chats',
    url: '/dashboard/chats',
    icon: 'message',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: 'users',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Blogs',
    url: '/dashboard/blogs',
    icon: 'article',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

export const navPagesItems: NavItem[] = [
  {
    title: 'Auth',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'checkShield',
    isActive: true,
    items: [
      {
        title: 'Sign In',
        url: '/sign-in',
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Sign Up',
        url: '/sign-up',
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Forgot Password',
        url: '/forgot-password',
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'OTP',
        url: '/otp',
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      }
    ]
  },
  {
    title: 'Errors',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'bug',
    isActive: true,
    items: [
      {
        title: 'Unauthorized',
        url: '/unauthorized',
        icon: "lock",
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Forbidden',
        url: '/forbidden',
        icon: "userx",
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Not Found',
        url: '/not-found',
        icon: "filex",
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Internal Server Error',
        url: '/general-error',
        icon: "serverOff",
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      },
      {
        title: 'Maintenance Error',
        url: '/maintenance-error',
        icon: 'construction',
        isActive: false,
        shortcut: ['p', 'p'],
        items: [] // No child items
      }
    ]
  }
];
export const navOtherItems: NavItem[] = [
  {
    title: 'Settings',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'settings',
    isActive: true,
    items: [
      {
        title: 'Profile',
        url: '/dashboard/settings/profile',
        icon: 'userCong',
        shortcut: ['m', 'm']
      },
      {
        title: 'Account',
        shortcut: ['l', 'l'],
        url: '/dashboard/settings/account',
        icon: 'wrench'
      },
      {
        title: 'Appearance',
        shortcut: ['l', 'l'],
        url: '/dashboard/settings/appearance',
        icon: 'palette'
      },
      {
        title: 'Notifications',
        shortcut: ['l', 'l'],
        url: '/dashboard/settings/notifications',
        icon: 'bell'
      },
      {
        title: 'Display',
        shortcut: ['l', 'l'],
        url: '/dashboard/settings/display',
        icon: 'monitor'
      },
    ]
  },
  {
    title: 'Help Center',
    url: '/help-center', // Placeholder as there is no direct link for the parent
    icon: 'helpCircle',
    isActive: true
  }
];

export const navMainItems: TNavParentItems[] = [
  {
    label: 'General',
    navItems: navGeneralItems
  },
  {
    label: 'Pages',
    navItems: navPagesItems
  },
  {
    label: 'Others',
    navItems: navOtherItems
  },
];

//Info: The following data is used for the sidebar navigation and Cmd K bar.

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];

export const overviewCardData = [
  {
    title: 'Total Revenue',
    value: '$1,250.00',
    change: '+12.5%',
    changeIcon: 'trendingUp',
    description: 'Trending up this month',
    footer: 'Visitors for the last 6 months'
  },
  // {
  //   title: 'New Customers',
  //   value: '1,234',
  //   change: '-20%',
  //   changeIcon: 'trendingDown',
  //   description: 'Down 20% this period',
  //   footer: 'Acquisition needs attention'
  // },
  // {
  //   title: 'Active Accounts',
  //   value: '45,678',
  //   change: '+12.5%',
  //   changeIcon: 'trendingUp',
  //   description: 'Strong user retention',
  //   footer: 'Engagement exceed targets'
  // },
  // {
  //   title: 'Growth Rate',
  //   value: '4.5%',
  //   change: '+4.5%',
  //   changeIcon: 'trendingUp',
  //   description: 'Steady performance increase',
  //   footer: 'Meets growth projections'
  // },
  {
    title: 'Total Bookings',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  },
  {
    title: 'Total Mechanics',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  },
  {
    title: 'Ongoing services',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  },
  {
    title: 'Upcoming services',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  },
  {
    title: 'Cancelled services',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  },
  {
    title: 'Completed services',
    value: '1,234',
    change: '+20%',
    changeIcon: 'trendingUp',
    description: 'Up 20% this period',
    footer: 'Engagement exceed targets'
  }
];
