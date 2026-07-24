import { FeatureItem, ModuleItem, PricingPlan, Testimonial, FAQItem } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Student Management',
    description: '360° student lifecycle tracking from admission, profile, digital ID cards, performance history, and alumni records.',
    category: 'core',
    iconName: 'GraduationCap',
    badge: 'Popular'
  },
  {
    id: 'f2',
    title: 'Teacher & Staff HR',
    description: 'Manage staff profiles, workload distribution, bio-metric attendance, leave requests, and performance metrics.',
    category: 'admin',
    iconName: 'Users'
  },
  {
    id: 'f3',
    title: 'AI Question Generator',
    description: 'Create balanced question papers in 30 seconds aligned with CBSE, ICSE, State Boards & Bloom’s Taxonomy.',
    category: 'academic',
    iconName: 'Sparkles',
    badge: 'AI Powered'
  },
  {
    id: 'f4',
    title: 'Smart Attendance',
    description: 'Facial recognition, RFID card, & WhatsApp automated alerts to parents for absent students in real-time.',
    category: 'core',
    iconName: 'CheckCircle2'
  },
  {
    id: 'f5',
    title: 'Automated Fee Management',
    description: 'Online payment gateway integration, auto SMS reminders, partial fee schedules, fine calculation & GST receipts.',
    category: 'admin',
    iconName: 'CreditCard',
    badge: 'Automated'
  },
  {
    id: 'f6',
    title: 'Smart Timetable Engine',
    description: 'Conflict-free automatic schedule generation for teachers, labs, classrooms, and proxy teacher allocations.',
    category: 'academic',
    iconName: 'Calendar'
  },
  {
    id: 'f7',
    title: 'Examination & Result ERP',
    description: 'Online & offline exam scheduling, automated report card generation (CBSE CCE compliant), and rank analytics.',
    category: 'academic',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'f8',
    title: 'Library Management',
    description: 'Barcode/RFID book tracking, auto fine calculation, digital e-book repository, and circulation management.',
    category: 'admin',
    iconName: 'BookOpen'
  },
  {
    id: 'f9',
    title: 'GPS Transport Tracking',
    description: 'Live bus route tracking for parents and school management, driver details, and speed limit breach alerts.',
    category: 'core',
    iconName: 'Bus'
  },
  {
    id: 'f10',
    title: 'Hostel & Mess Management',
    description: 'Room allocation, visitor logbooks, gate pass automation, mess meal menu planning, and warden dashboards.',
    category: 'admin',
    iconName: 'Building2'
  },
  {
    id: 'f11',
    title: 'Payroll & Accounting',
    description: 'Automated salary slip generation, EPF/ESI deduction calculations, ledger management, and audit reports.',
    category: 'admin',
    iconName: 'Calculator'
  },
  {
    id: 'f12',
    title: 'Parent Mobile App',
    description: 'Dedicated iOS/Android app for real-time homework, fees, bus tracking, marks, and direct teacher communication.',
    category: 'mobile',
    iconName: 'Smartphone',
    badge: 'iOS & Android'
  },
  {
    id: 'f13',
    title: 'Teacher Mobile Workspace',
    description: 'One-tap attendance, instant homework distribution, mark uploads, and syllabus progress tracking.',
    category: 'mobile',
    iconName: 'Briefcase'
  },
  {
    id: 'f14',
    title: 'Student Mobile Portal',
    description: 'Access e-learning materials, view assigned homework, submit assignments online, and view exam blueprints.',
    category: 'mobile',
    iconName: 'UserCheck'
  },
  {
    id: 'f15',
    title: 'Inventory & Store ERP',
    description: 'Uniform, stationery, and lab equipment stock tracking, purchase orders, vendor invoices, and low stock alerts.',
    category: 'admin',
    iconName: 'Boxes'
  },
  {
    id: 'f16',
    title: 'AI Analytics & Predictions',
    description: 'Predict student dropout risks, analyze subject weakness trends, and track institutional revenue forecasts.',
    category: 'academic',
    iconName: 'BarChart3',
    badge: 'AI Powered'
  }
];

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 'm1',
    name: 'Super Admin & Leadership',
    role: 'School Principal & Trustees',
    description: 'Command center providing complete financial health, academic growth, branch multi-tenancy, and compliance reporting.',
    features: ['Multi-Branch Management', 'Financial Analytics', 'Board Accreditation Reports', 'Staff Productivity Audits'],
    metrics: [
      { label: 'Decision Speed', value: '10x Faster' },
      { label: 'Paperwork Reduction', value: '95%' }
    ],
    color: '#2563EB',
    iconName: 'ShieldCheck'
  },
  {
    id: 'm2',
    name: 'Teacher & Academic Hub',
    role: 'Educators & HODs',
    description: 'Empower teachers to generate question papers in 30s, record attendance in 1 click, and auto-evaluate objective tests.',
    features: ['30s AI Paper Generator', '1-Click Attendance', 'Gradebook Automation', 'Lesson Plan Templates'],
    metrics: [
      { label: 'Weekly Hours Saved', value: '14 Hours' },
      { label: 'Question Bank Size', value: '10L+ Qs' }
    ],
    color: '#06B6D4',
    iconName: 'PenTool'
  },
  {
    id: 'm3',
    name: 'Finance & Accounts',
    role: 'Accountants & Bursars',
    description: 'Automate fee collection, send WhatsApp reminders, process online UPI/Card payments, and generate audited P&L statements.',
    features: ['Auto Fee Reminders', 'UPI / Gateway Integration', 'GST Compliant Receipts', 'Defaulter Alert Engine'],
    metrics: [
      { label: 'On-Time Fee Collection', value: '98.5%' },
      { label: 'Manual Accounting', value: '0 Error' }
    ],
    color: '#22C55E',
    iconName: 'Wallet'
  },
  {
    id: 'm4',
    name: 'Parent & Student App',
    role: 'Parents & Students',
    description: 'Seamless engagement via real-time notifications for bus arrival, upcoming exams, fee dues, and report cards.',
    features: ['Live GPS Bus Tracking', 'Digital Marksheets', 'Instant Fee Payment', 'Direct Teacher Chat'],
    metrics: [
      { label: 'Parent Satisfaction', value: '4.9/5' },
      { label: 'Active Daily Users', value: '500k+' }
    ],
    color: '#F59E0B',
    iconName: 'Smartphone'
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Starter',
    tagline: 'Ideal for small schools and coaching institutes looking to digitize core operations.',
    priceMonthly: 49,
    priceYearly: 39,
    features: [
      'Up to 500 Active Students',
      'Core Student & Teacher ERP',
      'Smart Attendance System',
      'Basic Question Paper Generator (100 papers/mo)',
      'Parent & Teacher Mobile App Access',
      'Fee Collection Gateway',
      'Email & Community Support'
    ],
    ctaText: 'Start Free Trial'
  },
  {
    id: 'p2',
    name: 'Professional',
    tagline: 'Complete solution for growing K-12 schools, colleges, and coaching networks.',
    priceMonthly: 129,
    priceYearly: 99,
    popular: true,
    features: [
      'Up to 2,500 Active Students',
      'All Starter Features Included',
      'Unlimited AI Question Paper Generator',
      'Bloom’s Taxonomy & Difficulty Balancing',
      'GPS Live Transport Tracking',
      'Library, Hostel & Inventory ERP',
      'Automated Payroll & Accounting',
      '24/7 Dedicated Support'
    ],
    ctaText: 'Get Started Now'
  },
  {
    id: 'p3',
    name: 'Enterprise',
    tagline: 'For large educational trusts, universities, and multi-branch school chains.',
    priceMonthly: 299,
    priceYearly: 249,
    features: [
      'Unlimited Students & Staff',
      'Multi-Branch Master Super Admin',
      'Custom Board Blueprint Generator (CBSE/ICSE/IB)',
      'Custom Domain & Branded Mobile Apps',
      'Dedicated Database & SLA 99.99%',
      'Custom ERP Workflows & API Access',
      'On-site Training & Account Manager'
    ],
    ctaText: 'Contact Enterprise Team'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Rajeshwardas Sharma',
    role: 'Chairman & Founder',
    institution: 'Apex International Schools (12 Branches)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    quote: 'SchoolOS transformed how our 12 school branches operate. The AI Question Paper Generator alone saves our 400+ teachers over 15 hours every single week during examination season.',
    metrics: '99.4% On-time Fee Recovery',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sister Mary Joseph',
    role: 'Principal',
    institution: 'St. Xavier Convent Senior Secondary',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    quote: 'The accuracy of SchoolOS AI difficulty distribution for Class 10 & 12 board preparation is unmatched. Parents love the live bus tracking app and instant fee receipts.',
    metrics: '14,000+ Students Managed',
    rating: 5
  },
  {
    id: 't3',
    name: 'Prof. Vikramaditya Roy',
    role: 'Academic Director',
    institution: 'Pinnacle JEE & NEET Coaching Academy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'We generate over 5,000 NEET mock test sets every month using SchoolOS. The Bloom Taxonomy alignment and instant answer key generation have elevated our exam results by 35%.',
    metrics: '500,000+ Mock Papers Created',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How fast can our school migrate to SchoolOS?',
    answer: 'Our automated Excel/CSV data import tool allows full migration of student, teacher, and historical academic records in less than 24 hours. Our onboarding team provides live training for your staff.',
    category: 'general'
  },
  {
    question: 'How accurate is the AI Question Paper Generator?',
    answer: 'SchoolOS AI is trained on 10+ years of CBSE, ICSE, IB, and State Board curriculum patterns. It supports Bloom’s Taxonomy levels (Knowledge, Understanding, Application, Analysis) and generates balanced papers with zero repetitive questions.',
    category: 'ai'
  },
  {
    question: 'Is our student data encrypted and compliant with privacy laws?',
    answer: 'Yes, SchoolOS uses 256-bit AES military-grade encryption for all data in transit and at rest. We are ISO 27001 certified and 100% compliant with student data privacy frameworks.',
    category: 'security'
  },
  {
    question: 'Can parents pay school fees directly through the mobile app?',
    answer: 'Absolutely. SchoolOS integrates with Razorpay, Paytm, Stripe, and UPI gateways. Parents receive automated WhatsApp reminders with instant payment links, and receipts are generated automatically.',
    category: 'pricing'
  },
  {
    question: 'Does SchoolOS support offline usage for rural school branches?',
    answer: 'Yes! The mobile apps for teachers and attendance support offline sync. Attendance logged without internet automatically syncs once connection is re-established.',
    category: 'general'
  }
];
