export interface Module34Item {
  id: number;
  title: string;
  category: 'core' | 'academic' | 'attendance' | 'finance' | 'portals' | 'saas';
  iconName: string;
  tagline: string;
  featuresList: string[];
  color: string;
}

export const ALL_34_MODULES: Module34Item[] = [
  {
    id: 1,
    title: '1. Dashboard Console',
    category: 'core',
    iconName: 'LayoutDashboard',
    tagline: 'Central leadership overview with real-time KPI widgets.',
    featuresList: ['School Overview', 'Student Count', 'Teacher Count', "Today's Attendance", 'Fees Collection', 'Upcoming Exams', 'Recent Activities', 'Notifications', 'Calendar', 'Analytics Charts'],
    color: '#2563EB'
  },
  {
    id: 2,
    title: '2. Student Management',
    category: 'core',
    iconName: 'GraduationCap',
    tagline: 'Complete student lifecycle & digital profile registry.',
    featuresList: ['Student Admission', 'Student Profile', 'Student Documents', 'Student Photo', 'Student ID Card', 'Roll Number Allocation', 'Class Promotion', 'Transfer Certificate (TC)', 'Alumni Management', 'Student Search', 'Bulk Excel Import/Export'],
    color: '#06B6D4'
  },
  {
    id: 3,
    title: '3. Teacher Management',
    category: 'core',
    iconName: 'UserCheck',
    tagline: 'Faculty registry, workload & attendance tracking.',
    featuresList: ['Teacher Profile', 'Qualification & Degree', 'Experience History', 'Salary & Pay Grade', 'Attendance Logging', 'Leave Management', 'Subject Allocation', 'Class Allocation', 'Teacher ID Card'],
    color: '#10B981'
  },
  {
    id: 4,
    title: '4. Staff Management',
    category: 'core',
    iconName: 'Users',
    tagline: 'Non-teaching staff, drivers & admin workforce.',
    featuresList: ['Office Staff', 'Accountant', 'Librarian', 'Driver Records', 'Receptionist', 'Peon & Maintenance', 'Security Staff', 'HR Records'],
    color: '#F59E0B'
  },
  {
    id: 5,
    title: '5. Attendance System',
    category: 'attendance',
    iconName: 'CheckSquare',
    tagline: 'Multi-biometric, face recognition & GPS tracking.',
    featuresList: ['Student Attendance', 'Teacher Attendance', 'Staff Attendance', 'QR Attendance', 'Fingerprint Integration', 'Face Recognition', 'GPS Attendance', 'Attendance Reports', 'SMS to Absent Parents'],
    color: '#8B5CF6'
  },
  {
    id: 6,
    title: '6. Admission Management',
    category: 'core',
    iconName: 'ClipboardList',
    tagline: 'End-to-end online admission & merit list pipeline.',
    featuresList: ['Online Admission Form', 'Admission Approval', 'Document Verification', 'Merit List Generation', 'Waiting List Management', 'Student Registration'],
    color: '#EC4899'
  },
  {
    id: 7,
    title: '7. Fees Management',
    category: 'finance',
    iconName: 'CreditCard',
    tagline: 'Automated fee collection, gateway & defaulters.',
    featuresList: ['Fee Structure Customization', 'Installment Schedules', 'Discounts & Concessions', 'Fine Calculation', 'Online Payment Gateways', 'Instant Receipt Generation', 'Pending Fee Reports', 'Scholarship Management'],
    color: '#10B981'
  },
  {
    id: 8,
    title: '8. Examination Management',
    category: 'academic',
    iconName: 'FileSpreadsheet',
    tagline: 'Exam schedules, hall tickets, seating & grading.',
    featuresList: ['Exam Schedule Generator', 'Hall Ticket Creation', 'Seating Arrangement Engine', 'Invigilator Allocation', 'Marks Entry Portal', 'Result Generation', 'Rank List', 'Grade System & GPA/CGPA'],
    color: '#3B82F6'
  },
  {
    id: 9,
    title: '9. AI Question Paper Generator',
    category: 'academic',
    iconName: 'Sparkles',
    tagline: 'Board-compliant AI test generator with answer keys.',
    featuresList: ['AI Question Generation', 'Subject Wise', 'Chapter Wise', 'Topic Wise', 'Difficulty Balancing', 'Marks Wise Distribution', 'Bloom Taxonomy', 'Blueprint Generator', 'Multiple Paper Sets', 'Auto Shuffle', 'Answer Key & PDF/Word Export'],
    color: '#6366F1'
  },
  {
    id: 10,
    title: '10. Question Bank Repository',
    category: 'academic',
    iconName: 'BookOpen',
    tagline: 'Centralized repository of 1M+ categorized questions.',
    featuresList: ['Unlimited Questions Bank', 'MCQ Questions', 'True/False Questions', 'Fill in the Blanks', 'Short & Long Answer', 'Diagram & Image Questions', 'Tags & Search', 'Import/Export via Excel'],
    color: '#0EA5E9'
  },
  {
    id: 11,
    title: '11. Homework Management',
    category: 'academic',
    iconName: 'BookMarked',
    tagline: 'Assign, evaluate & generate AI homework sets.',
    featuresList: ['Assign Homework', 'AI Homework Generator', 'Online Submissions', 'Teacher Review', 'Marks & Feedback', 'Attach PDF/Images'],
    color: '#F43F5E'
  },
  {
    id: 12,
    title: '12. Assignment Management',
    category: 'academic',
    iconName: 'FileText',
    tagline: 'Classwork & project assignment evaluations.',
    featuresList: ['Create Assignment', 'Student Submissions', 'Evaluation Workspace', 'Detailed Feedback', 'Grade Allocations'],
    color: '#14B8A6'
  },
  {
    id: 13,
    title: '13. Timetable Engine',
    category: 'academic',
    iconName: 'Calendar',
    tagline: 'Automatic conflict-free master timetable builder.',
    featuresList: ['Class Timetable', 'Teacher Timetable', 'Exam Timetable', 'Automatic Timetable Generator'],
    color: '#84CC16'
  },
  {
    id: 14,
    title: '14. Result & Marksheet ERP',
    category: 'academic',
    iconName: 'Award',
    tagline: 'CBSE CCE compliant report card & rank lists.',
    featuresList: ['Result Card Template', 'Progress Report', 'Rank Calculation', 'Grade Allocation', 'Download Printable PDF'],
    color: '#A855F7'
  },
  {
    id: 15,
    title: '15. Library Management',
    category: 'finance',
    iconName: 'Library',
    tagline: 'Barcode book tracking, circulation & fines.',
    featuresList: ['Book Catalog Management', 'Barcode Scanning', 'Issue & Return Workflow', 'Overdue Fine Calculation', 'Library Circulation Reports'],
    color: '#EAB308'
  },
  {
    id: 16,
    title: '16. Transport & GPS Tracking',
    category: 'finance',
    iconName: 'Bus',
    tagline: 'Live school bus routes, drivers & parent GPS.',
    featuresList: ['Bus Routes & Stops', 'Vehicle Fleet Records', 'Driver Details', 'Pickup Points', 'Live GPS Tracking'],
    color: '#F97316'
  },
  {
    id: 17,
    title: '17. Hostel Management',
    category: 'finance',
    iconName: 'Building',
    tagline: 'Room allocations, warden logs & mess fees.',
    featuresList: ['Room Allocation', 'Hostel Fees Management', 'Warden Attendance', 'Visitor Logbook'],
    color: '#06B6D4'
  },
  {
    id: 18,
    title: '18. HR & Payroll ERP',
    category: 'finance',
    iconName: 'BadgeIndianRupee',
    tagline: 'Automated staff salary slips, EPF & leaves.',
    featuresList: ['Employee HR Records', 'Salary Structure', 'Payslip PDF Generation', 'Leave Encashment', 'Payroll Reports'],
    color: '#10B981'
  },
  {
    id: 19,
    title: '19. Communication Suite',
    category: 'portals',
    iconName: 'MessageSquare',
    tagline: 'Instant SMS, WhatsApp API & Push notifications.',
    featuresList: ['Bulk SMS Alerts', 'Email Notifications', 'WhatsApp API Integration', 'Push Notifications', 'Circulars & Announcements'],
    color: '#3B82F6'
  },
  {
    id: 20,
    title: '20. Parent Mobile App',
    category: 'portals',
    iconName: 'Smartphone',
    tagline: 'Real-time parent portal for bus, fees & marks.',
    featuresList: ['Attendance Feed', 'Homework Alerts', 'Fee Receipts', 'Exam Results', 'Official Notices', 'Direct Teacher Chat'],
    color: '#EC4899'
  },
  {
    id: 21,
    title: '21. Student Portal',
    category: 'portals',
    iconName: 'User',
    tagline: 'Student self-service portal for notes & tests.',
    featuresList: ['Attendance View', 'Homework Submissions', 'Digital E-Notes', 'Exam Results', 'Fee Receipts', 'Class Timetable'],
    color: '#8B5CF6'
  },
  {
    id: 22,
    title: '22. Teacher Workspace',
    category: 'portals',
    iconName: 'Briefcase',
    tagline: '1-click attendance, lesson plans & marks.',
    featuresList: ['1-Click Attendance', 'Homework Assignment', 'Marks Entry', 'Lesson Plan Generator', 'Question Paper Generator'],
    color: '#14B8A6'
  },
  {
    id: 23,
    title: '23. Certificate Generator',
    category: 'core',
    iconName: 'FileCheck',
    tagline: 'Automated TC, Bonafide & Character certificates.',
    featuresList: ['Bonafide Certificate', 'Leaving Certificate (TC)', 'Character Certificate', 'Custom Certificate Designer'],
    color: '#6366F1'
  },
  {
    id: 24,
    title: '24. ID Card Generator',
    category: 'core',
    iconName: 'Contact',
    tagline: 'Bulk barcode & QR-enabled student & staff ID cards.',
    featuresList: ['Student ID Cards', 'Teacher ID Cards', 'Staff ID Cards', 'QR Code & Barcode Embed'],
    color: '#3B82F6'
  },
  {
    id: 25,
    title: '25. Inventory & Assets',
    category: 'finance',
    iconName: 'Boxes',
    tagline: 'Stationery, lab equipment & purchase orders.',
    featuresList: ['Stationery Tracking', 'School Assets', 'Stock Reorder Alerts', 'Vendor Purchase Orders'],
    color: '#F59E0B'
  },
  {
    id: 26,
    title: '26. Accounts & Ledger ERP',
    category: 'finance',
    iconName: 'Calculator',
    tagline: 'P&L, income, expenses, balance sheets & GST.',
    featuresList: ['Income Tracking', 'Expenses Management', 'General Ledger', 'Balance Sheet Generation', 'GST Audit Reports'],
    color: '#10B981'
  },
  {
    id: 27,
    title: '27. Reports & Audits',
    category: 'saas',
    iconName: 'BarChart3',
    tagline: 'Compliance & operational reports for leadership.',
    featuresList: ['Student Reports', 'Attendance Audits', 'Fee Recovery Reports', 'Exam Analytics', 'Teacher Productivity', 'Financial P&L Reports'],
    color: '#2563EB'
  },
  {
    id: 28,
    title: '28. Analytics Dashboard',
    category: 'saas',
    iconName: 'TrendingUp',
    tagline: 'AI insights, dropout risk & fee forecasting.',
    featuresList: ['Attendance Trends Graph', 'Fee Collection Forecast', 'Exam Performance Analytics', 'AI Insights Engine', 'Institutional Growth'],
    color: '#06B6D4'
  },
  {
    id: 29,
    title: '29. Multi-School SaaS',
    category: 'saas',
    iconName: 'Globe',
    tagline: 'Multi-branch tenancy for school trusts & chains.',
    featuresList: ['Multiple School Management', 'Separate Database Isolation', 'Subdomain Support', 'Subscription Billing Plans'],
    color: '#8B5CF6'
  },
  {
    id: 30,
    title: '30. Super Admin Panel',
    category: 'saas',
    iconName: 'ShieldAlert',
    tagline: 'Master administrative control for trustees.',
    featuresList: ['Schools Management', 'Subscription Plans', 'Revenue Dashboard', 'Coupons', 'Support Tickets', 'Automated Daily Backups', 'Audit Logs', 'Global Alerts', 'AI Usage Monitoring'],
    color: '#EF4444'
  },
  {
    id: 31,
    title: '31. Native Mobile Apps',
    category: 'portals',
    iconName: 'SmartphoneNfc',
    tagline: 'Cross-platform iOS & Android mobile applications.',
    featuresList: ['Android App', 'iOS App (Future Ready)', 'Offline Sync Mode', 'Instant Push Notifications'],
    color: '#10B981'
  },
  {
    id: 32,
    title: '32. Security & Compliance',
    category: 'saas',
    iconName: 'Lock',
    tagline: 'ISO 27001, 256-bit AES encryption & 2FA.',
    featuresList: ['JWT Authentication', 'Role-Based Access Control', 'Two-Factor Authentication (2FA)', 'Audit Logs', 'Daily Encrypted Backup', 'SSL Certificates', 'Military Data Encryption'],
    color: '#6366F1'
  },
  {
    id: 34,
    title: '34. Third-Party Integrations',
    category: 'saas',
    iconName: 'Layers',
    tagline: 'Connect Razorpay, WhatsApp, Drive & Calendar.',
    featuresList: ['Razorpay Gateway', 'Cashfree Gateway', 'Stripe Integration', 'Google Drive Cloud Backup', 'Google Calendar Sync', 'Gmail Integration', 'WhatsApp Business API', 'SMS Gateways'],
    color: '#3B82F6'
  }
];
