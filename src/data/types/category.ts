export type Category = {
  name: string;
  href: string;
}

export const jobCategories: Category[] = [
  { name: "Communication", href: "/job" },
  { name: "Data Science", href: "/data-science" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Human Resource", href: "/hr" },
  { name: "Network Engineering", href: "/network" },
  { name: "Cyber Security", href: "/cyber-security" },
  { name: "Database", href: "/database" },
  { name: "Engineering", href: "/engineering" },
  { name: "Mobile Application Development", href: "/mobile-application-develop" },
  { name: "Others", href: "/others" },
];

export const popularKeywords: Category[] = [
  { name: "Information Technology Support", href: "/its" },
  { name: "PHP", href: "/php" },
  { name: "Java", href: "/java" },
  { name: "Objective-C", href: "/object-c" },
  { name: "Video Editor", href: "/video" },
  { name: "IOS Developer Dev", href: "/ios-dev" },
  { name: "Artificial Intelligence AI", href: "/ai" },
  { name: "User Interface", href: "/user-interface" },
  { name: "C Program", href: "/c-program" },
  { name: "Web", href: "/web" },
  { name: "Design", href: "/design" },
  { name: "React Native", href: "/react-native" },
  { name: "Android Dev", href: "/android-dev" },
  { name: "System Engineer", href: "/system-engineer" },
];

export type Option = {
  value: string;
  label: string;
}

export const Industries: Option[] = [
  { value: 'Banking', label: 'Banking & Finance' },
  { value: 'E-commerce', label: 'E-Commerce' },
  { value: 'funding', label: 'Funding & Finance' },
  { value: 'health-person', label: 'Health/Person Care' },
  { value: 'Hotel', label: 'Hotel/Hospitality' },
  { value: 'Information', label: 'Information Technology' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'others', label: 'Others' },
  { value: 'recruit', label: 'Recruiting Services' },
  { value: 'smart-ticketing', label: 'Smart Ticketing Solution' },
  { value: 'software-company', label: 'Software Company' },
  { value: 'tech-solution', label: 'Tech-Solution' },
];

export const categories: Option[] = [
  { value: 'ai', label: 'Artificial Intelligence' },
  { value: 'communication', label: 'Communication' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'database', label: 'Database' },
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'human-resource', label: 'Human Resource' },
  { value: 'mobile-app', label: 'Mobile Application Development' },
  { value: 'network-eng', label: 'Network Engineering' },
  { value: 'other', label: 'Other' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'quality-assurance', label: 'Quality Assurance' },
  { value: 'sale-consultant', label: 'Sale Consultant' },
  { value: 'software-development', label: 'Software Development' },
  { value: 'system-development', label: 'System Development' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'web', label: 'Web3' },
];

export const time: Option[] = [
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
];

export const locations: Option[] = [
  { value: 'phnom-penh', label: 'Phnom Penh' },
  { value: 'kps', label: 'Preah Sihanouk' },
];