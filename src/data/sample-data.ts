export const sampleData = {
  user: {
    name: 'Hilaire Sh',
    email: 'hilaire@uidesign',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Product Designer',
    quickActions: [
      { id: 1, label: 'View Profile', icon: 'User' },
      { id: 2, label: 'Account Settings', icon: 'Settings' },
      { id: 3, label: 'Team Management', icon: 'Users' },
      { id: 4, label: 'Billing', icon: 'CreditCard' },
      { id: 5, label: 'Sign Out', icon: 'LogOut' }
    ]
  },
  notifications: [
    {
      id: 1,
      title: 'New Challenge Available',
      description: 'UI Design Challenge: E-commerce Dashboard',
      time: '5 minutes ago',
      read: false,
      type: 'challenge'
    },
    {
      id: 2,
      title: 'Team Invitation',
      description: 'John Doe invited you to join Design Team',
      time: '1 hour ago',
      read: false,
      type: 'team'
    },
    {
      id: 3,
      title: 'Hackathon Starting Soon',
      description: 'Web3 Hackathon starts in 2 hours',
      time: '2 hours ago',
      read: true,
      type: 'hackathon'
    }
  ],
  navigation: [
    {
      title: 'Main',
      items: [
        { name: 'Dashboard', icon: 'LayoutDashboard', href: '/talent/dashboard', active: true },
        { name: 'Challenges & Hackathons', icon: 'Trophy', href: '/talent/challenges' },
        { name: 'Community', icon: 'Users', href: '/talent/community' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Settings', icon: 'Settings', href: '/talent/settings' },
        { name: 'Help Center', icon: 'HelpCircle', href: '/talent/help' },
        { name: 'Refer family & friends', icon: 'UserPlus', href: '/talent/refer' }
      ]
    }
  ]
};
