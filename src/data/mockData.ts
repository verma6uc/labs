export interface User {
  id: string;
  name: string;
  email: string;
  role: 'SUPERADMIN' | 'CREATOR' | 'USER';
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  avatar?: string;
  company: string;
  createdAt: string;
  department?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  preferences?: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    emailUpdates: boolean;
    twoFactorAuth: boolean;
  };
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface SystemSettings {
  id: string;
  name: string;
  value: string;
  category: 'security' | 'general' | 'email' | 'api' | 'notifications';
  description: string;
  lastUpdated: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  ipAddress: string;
  timestamp: string;
  status: 'success' | 'failure' | 'warning';
}

export interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
  change: number;
  period: 'daily' | 'weekly' | 'monthly';
  lastUpdated: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
  category: 'system' | 'security' | 'user' | 'project';
}

export interface UserActivity {
  id: string;
  userId: string;
  type: 'login' | 'settings_change' | 'profile_update' | 'project_action';
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface PagePermission {
  path: string;
  allowedRoles: string[];
}

export const pagePermissions: PagePermission[] = [
  {
    path: '/admin',
    allowedRoles: ['SUPERADMIN', 'CREATOR', 'USER'],
  },
  {
    path: '/admin/users',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    path: '/admin/settings',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    path: '/admin/security',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    path: '/projects',
    allowedRoles: ['CREATOR', 'USER'],
  },
  {
    path: '/workspace',
    allowedRoles: ['CREATOR', 'USER'],
  },
];

// Menu items configuration with role-based access
export interface MenuItem {
  title: string;
  path: string;
  icon: string;
  allowedRoles: string[];
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: 'dashboard',
    allowedRoles: ['SUPERADMIN', 'CREATOR', 'USER'],
  },
  {
    title: 'Analytics',
    path: '/admin/analytics',
    icon: 'analytics',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    title: 'User Management',
    path: '/admin/user-management',
    icon: 'people',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    title: 'Live Sessions',
    path: '/admin/live-sessions',
    icon: 'timer',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    title: 'Security Suite',
    path: '/admin/security-audit',
    icon: 'security',
    allowedRoles: ['SUPERADMIN'],
  },
  {
    title: 'System Settings',
    path: '/admin/settings',
    icon: 'settings',
    allowedRoles: ['SUPERADMIN'],
  },
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'admin-001',
    name: 'John Admin',
    email: 'john.admin@creatorlabs.com',
    role: 'SUPERADMIN',
    status: 'active',
    lastActive: '2023-12-10T10:30:00',
    company: 'Creator Labs',
    createdAt: '2023-01-01T00:00:00',
    avatar: 'https://ui-avatars.com/api/?name=John+Admin&background=0D8ABC&color=fff',
    department: 'Administration',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Senior System Administrator with 10+ years of experience in managing enterprise systems and teams.',
    skills: ['System Administration', 'Security', 'Team Management', 'Cloud Infrastructure'],
    preferences: {
      theme: 'system',
      notifications: true,
      emailUpdates: true,
      twoFactorAuth: true,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johnadmin',
      github: 'https://github.com/johnadmin',
    },
  },
  {
    id: 'creator-001',
    name: 'Sarah Creator',
    email: 'sarah.creator@company.com',
    role: 'CREATOR',
    status: 'active',
    lastActive: '2023-12-10T09:45:00',
    company: 'Design Co',
    createdAt: '2023-03-15T00:00:00',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Creator&background=6366F1&color=fff',
    department: 'Design',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    bio: 'Creative Director specializing in UI/UX design and brand identity.',
    skills: ['UI Design', 'UX Research', 'Brand Strategy', 'Prototyping'],
    preferences: {
      theme: 'dark',
      notifications: true,
      emailUpdates: true,
      twoFactorAuth: false,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahcreator',
      twitter: 'https://twitter.com/sarahcreates',
    },
  },
  {
    id: 'user-001',
    name: 'Mike User',
    email: 'mike.user@client.com',
    role: 'USER',
    status: 'active',
    lastActive: '2023-12-09T16:20:00',
    company: 'Client Corp',
    createdAt: '2023-06-01T00:00:00',
  },
  // Add more detailed user profiles...
];

export interface Project {
  id: string;
  name: string;
  stage: 'planning' | 'development' | 'testing' | 'deployed';
  progress: number;
  startDate: string;
  lastUpdated: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employeeCount: number;
  subscriptionType: 'basic' | 'pro' | 'enterprise';
  projects: Project[];
}

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: '/company-logos/techcorp.png',
    industry: 'Software Development',
    location: 'San Francisco, CA',
    employeeCount: 250,
    subscriptionType: 'enterprise',
    projects: [
      {
        id: 'p1',
        name: 'Cloud Migration',
        stage: 'development',
        progress: 65,
        startDate: '2024-11-15',
        lastUpdated: '2024-12-10'
      },
      {
        id: 'p2',
        name: 'Mobile App',
        stage: 'testing',
        progress: 85,
        startDate: '2024-10-01',
        lastUpdated: '2024-12-09'
      }
    ]
  },
  {
    id: '2',
    name: 'InnovateLabs',
    logo: '/company-logos/innovatelabs.png',
    industry: 'AI & Machine Learning',
    location: 'Boston, MA',
    employeeCount: 120,
    subscriptionType: 'pro',
    projects: [
      {
        id: 'p3',
        name: 'AI Model Training',
        stage: 'deployed',
        progress: 100,
        startDate: '2024-09-20',
        lastUpdated: '2024-12-08'
      },
      {
        id: 'p4',
        name: 'Data Pipeline',
        stage: 'development',
        progress: 45,
        startDate: '2024-11-25',
        lastUpdated: '2024-12-10'
      }
    ]
  },
  {
    id: '3',
    name: 'DataFlow Analytics',
    logo: '/company-logos/dataflow.png',
    industry: 'Data Analytics',
    location: 'Seattle, WA',
    employeeCount: 180,
    subscriptionType: 'enterprise',
    projects: [
      {
        id: 'p5',
        name: 'Analytics Dashboard',
        stage: 'planning',
        progress: 25,
        startDate: '2024-12-01',
        lastUpdated: '2024-12-10'
      },
      {
        id: 'p6',
        name: 'ETL Pipeline',
        stage: 'development',
        progress: 55,
        startDate: '2024-11-10',
        lastUpdated: '2024-12-09'
      }
    ]
  }
];

// Mock System Settings
export const mockSettings: SystemSettings[] = [
  {
    id: 'setting-001',
    name: 'Platform Name',
    value: 'Creator Labs',
    category: 'general',
    description: 'The name of your platform as displayed to users',
    lastUpdated: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'setting-002',
    name: 'Support Email',
    value: 'support@creatorlabs.com',
    category: 'general',
    description: 'Primary email address for user support inquiries',
    lastUpdated: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'setting-003',
    name: 'Session Timeout',
    value: '30',
    category: 'security',
    description: 'User session timeout in minutes',
    lastUpdated: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'setting-004',
    name: 'Password Policy',
    value: 'strong',
    category: 'security',
    description: 'Password strength requirement (basic, medium, strong)',
    lastUpdated: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'setting-005',
    name: 'Email Notifications',
    value: 'true',
    category: 'notifications',
    description: 'Enable system-wide email notifications',
    lastUpdated: new Date('2024-01-01').toISOString(),
  },
  {
    id: 'setting-006',
    name: 'Notification Frequency',
    value: 'instant',
    category: 'notifications',
    description: 'How often to send notification digests (instant, daily, weekly)',
    lastUpdated: new Date('2024-01-01').toISOString(),
  }
];

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
  {
    id: 'log-001',
    userId: 'admin-001',
    action: 'USER_CREATE',
    details: 'Created new user account',
    ipAddress: '192.168.1.1',
    timestamp: '2023-12-10T10:30:00',
    status: 'success',
  },
  {
    id: 'log-002',
    userId: 'admin-001',
    action: 'SETTINGS_UPDATE',
    details: 'Updated system settings',
    ipAddress: '192.168.1.1',
    timestamp: '2023-12-10T10:35:00',
    status: 'success',
  },
  {
    id: 'log-003',
    userId: 'creator-001',
    action: 'LOGIN_FAILED',
    details: 'Failed login attempt',
    ipAddress: '192.168.1.2',
    timestamp: '2023-12-10T09:45:00',
    status: 'failure',
  },
  // Add more audit logs as needed
];

// Mock Analytics Data
export const mockAnalytics: AnalyticsData[] = [
  {
    id: 'ana-001',
    metric: 'Active Users',
    value: 2847,
    change: 12.5,
    period: 'daily',
    lastUpdated: '2023-12-10T00:00:00',
  },
  {
    id: 'ana-002',
    metric: 'API Requests',
    value: 1200000,
    change: 8.2,
    period: 'daily',
    lastUpdated: '2023-12-10T00:00:00',
  },
  {
    id: 'ana-003',
    metric: 'Storage Usage',
    value: 642,
    change: 5.7,
    period: 'daily',
    lastUpdated: '2023-12-10T00:00:00',
  },
  // Add more analytics data as needed
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-001',
    userId: 'admin-001',
    type: 'warning',
    title: 'Security Alert',
    message: 'Multiple failed login attempts detected from IP 192.168.1.100',
    timestamp: '2023-12-10T10:15:00',
    read: false,
    category: 'security',
    link: '/admin/security',
  },
  {
    id: 'notif-002',
    userId: 'admin-001',
    type: 'success',
    title: 'Backup Completed',
    message: 'System backup completed successfully',
    timestamp: '2023-12-10T09:30:00',
    read: false,
    category: 'system',
  },
  {
    id: 'notif-003',
    userId: 'admin-001',
    type: 'info',
    title: 'New User Registration',
    message: 'New creator account pending approval',
    timestamp: '2023-12-10T08:45:00',
    read: true,
    category: 'user',
    link: '/admin/users',
  },
  {
    id: 'notif-004',
    userId: 'admin-001',
    type: 'error',
    title: 'API Error',
    message: 'High rate of API errors detected in production',
    timestamp: '2023-12-10T08:00:00',
    read: false,
    category: 'system',
    link: '/admin/settings',
  },
];

// User Activities
export const mockUserActivities: UserActivity[] = [
  {
    id: 'act-001',
    userId: 'admin-001',
    type: 'login',
    description: 'Logged in from new device',
    timestamp: '2023-12-10T10:30:00',
    metadata: {
      device: 'Chrome on Windows',
      location: 'San Francisco, CA',
    },
  },
  {
    id: 'act-002',
    userId: 'admin-001',
    type: 'settings_change',
    description: 'Updated system security settings',
    timestamp: '2023-12-10T10:45:00',
    metadata: {
      changes: ['Session timeout', 'Password policy'],
    },
  },
  {
    id: 'act-003',
    userId: 'admin-001',
    type: 'profile_update',
    description: 'Updated profile information',
    timestamp: '2023-12-10T11:00:00',
    metadata: {
      fields: ['phone', 'location'],
    },
  },
];

// Mock Authentication
export const mockAuth = {
  currentUser: mockUsers[0], // Default to admin user for prototype
  isAuthenticated: true,
};

// Live Session
export interface LiveSession {
  id: string;
  userId: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  ipAddress: string;
  location: string;
  startTime: string;
  lastActivity: string;
  status: 'active' | 'idle' | 'disconnected';
}

export const mockLiveSessions: LiveSession[] = [
  {
    id: '1',
    userId: '1',
    deviceType: 'desktop',
    browser: 'Chrome 120.0',
    ipAddress: '192.168.1.100',
    location: 'New York, US',
    startTime: '2024-12-10T12:30:00',
    lastActivity: '2024-12-10T18:15:00',
    status: 'active'
  },
  {
    id: '2',
    userId: '2',
    deviceType: 'mobile',
    browser: 'Safari Mobile 17.0',
    ipAddress: '192.168.1.101',
    location: 'London, UK',
    startTime: '2024-12-10T17:45:00',
    lastActivity: '2024-12-10T18:10:00',
    status: 'idle'
  },
  {
    id: '3',
    userId: '3',
    deviceType: 'tablet',
    browser: 'Firefox 119.0',
    ipAddress: '192.168.1.102',
    location: 'Toronto, CA',
    startTime: '2024-12-10T16:20:00',
    lastActivity: '2024-12-10T17:55:00',
    status: 'active'
  },
  {
    id: '4',
    userId: '4',
    deviceType: 'desktop',
    browser: 'Edge 120.0',
    ipAddress: '192.168.1.103',
    location: 'Sydney, AU',
    startTime: '2024-12-10T15:10:00',
    lastActivity: '2024-12-10T16:45:00',
    status: 'disconnected'
  },
  {
    id: '5',
    userId: '5',
    deviceType: 'mobile',
    browser: 'Chrome Mobile 120.0',
    ipAddress: '192.168.1.104',
    location: 'Mumbai, IN',
    startTime: '2024-12-10T17:30:00',
    lastActivity: '2024-12-10T18:20:00',
    status: 'active'
  }
];
