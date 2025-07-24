export type Job = {
  q?: string
  id: number;
  title: string;
  jobCode?: string;
  type?: string;
  level?: string;
  company?: string;
  openings?: number;
  location?: string;
  salary?: string;
  skills: string[];
  gender?: string;
  age?: string,
  description?: string;
  experience?: string;
  language?: string;
  industry?: string;
  category?: string;
  qualification?: string;
  closingDate?: string;
  postedDate?: number;
  isRemote?: boolean | string;
  postedTime?: string;
  requirements: string[];
  responsibilities: string[];
  contact: {
    address: string,
    phone: string,
    email: string,
    workingHours: string;
  };
  workplaceImages?: string[]
};

export const allJobs: Job[] = [
  { 
    id: 1, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 10013',
    salary: '$1200 ~ $1500',
    postedTime: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    gender: "Male",
    age: "18+",
    skills: ['Software', 'System Analyst'],
    description: "Join our team as a Full Stack Developer to build amazing web applications.",
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
    workplaceImages: []
  },
  { 
    id: 2, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 1001',
    salary: '$1200 ~ $1500',
    // posted: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    skills: ['Software', 'System Analyst'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 3, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 1001',
    salary: '$1200 ~ $1500',
    // posted: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    skills: ['Software', 'System Analyst'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 4, 
    title: 'Full Stack Developer', 
    jobCode: 'JB-1000',
    salary: '$1000 ~ $1800',
    type: 'Full Time', 
    level: "Mid Level", 
    location: 'Chrony Changvar', 
    openings: 1,
    skills: ['JavaScript', 'React', 'Node.js'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 5, 
    title: 'Full Stack Developer', 
    jobCode: 'JB-0999',
    salary: '$1100 ~ $2500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Senior Level", 
    location: 'Chbar Ampov', 
    openings: 4,
    skills: ['JavaScript', 'React', 'Node.js'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 6, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phnom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 7, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 8, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 9, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 10, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 11, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 12, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
  { 
    id: 13, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'],
    requirements: [
      "Bachelor's Degree in Computer Science or related field",
      "2+ years experience with JavaScript, React, and Node.js",
      "Experience with database systems (SQL or NoSQL)",
      "Knowledge of RESTful APIs and web services",
      "Understanding of version control (Git)"
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
      "Troubleshoot and debug applications"
    ],
    contact: {
      address: '#456, Street 789, Phnom Penh, Cambodia',
      phone: '+855 98 765 432',
      email: 'dev@company.com',
      workingHours: 'Monday - Friday, 9:00am - 6:00pm'
    },
  },
]

export interface Position {
  id: string;
  name: string;
  displayName: string;
  khmerName: string;
  count: number;
}

export const JobPositions: Position[] = [
  {
    id: 'internship',
    name: 'Internship',
    displayName: 'Internship',
    khmerName: 'ការងារមិនត្រូវការបទពិសោធន៏',
    count: 1,
  },
  {
    id: 'junior',
    name: 'Junior Level',
    displayName: 'Junior Level',
    khmerName: 'ការងារត្រូវការបទពិសោធន៏តិចតួច',
    count: 1,
  },
  {
    id: 'medium',
    name: 'Medium Level',
    displayName: 'Medium Level',
    khmerName: 'ការងារត្រូវការបទពិសោធន៏មធ្យម',
    count: 1,
  },
  {
    id: 'senior',
    name: 'Senior Level',
    displayName: 'Senior Level',
    khmerName: 'ការងារត្រូវការបទពិសោធន៏ច្រើន',
    count: 1,
  },
  {
    id: 'manager',
    name: 'Manager Level',
    displayName: 'Manager Level',
    khmerName: 'ការងារផ្នែកគ្រប់គ្រង',
    count: 1,
  },
  {
    id: 'executive',
    name: 'Top Executive Level',
    displayName: 'Top Executive',
    khmerName: 'ការងារមិនត្រូវការបទពិសោធន៏',
    count: 1,
  },
]