export type Job = {
  id: number;
  title: string;
  jobCode: string;
  type: string;
  level: string;
  company?: string;
  openings: number;
  location: string;
  salary?: string;
  skills?: string[];

};

export const allJobs: Job[] = [
  { 
    id: 1001, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 1001',
    salary: '$1200 ~ $1500',
    // posted: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    skills: ['Software', 'System Analyst'] 
  },
  { 
    id: 1001, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 1001',
    salary: '$1200 ~ $1500',
    // posted: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    skills: ['Software', 'System Analyst'] 
  },
  { 
    id: 1001, 
    title: 'System Business Analysts', 
    jobCode: 'JB - 1001',
    salary: '$1200 ~ $1500',
    // posted: '18 hours ago',
    type: 'Full Time', 
    level: "Internship", 
    location: 'Danglao', 
    openings: 1,
    skills: ['Software', 'System Analyst'] 
  },


  
  { 
    id: 1000, 
    title: 'Full Stack Developer', 
    jobCode: 'JB-1000',
    salary: '$1000 ~ $1800',
    type: 'Full Time', 
    level: "Mid Level", 
    location: 'Chrony Changvar', 
    openings: 1,
    skills: ['JavaScript', 'React', 'Node.js'] 
  },
  { 
    id: 999, 
    title: 'Full Stack Developer', 
    jobCode: 'JB-0999',
    salary: '$1100 ~ $2500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Senior Level", 
    location: 'Chbar Ampov', 
    openings: 4,
    skills: ['JavaScript', 'React', 'Node.js'] 
  },
  { 
    id: 998, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phnom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'] 
  },
  { 
    id: 998, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'] 
  },
  { 
    id: 998, 
    title: 'System Reliability Associate', 
    jobCode: 'JB-0998',
    salary: '$1200 ~ $1500',
    // posted: '9 days ago',
    type: 'Full Time', 
    level: "Junior Level", 
    location: 'Phoom Penh', 
    openings: 1,
    skills: ['Problem Solving', 'Python'] 
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