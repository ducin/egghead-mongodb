interface Employee {
  // id: number;
  name: string;
  position: string;
  age: number;
  skills: string[];
  salary: number;
  personalInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

interface Project {
  id: string;
  name: string;
  budget: number;
  team: number[];
}

const newEmployee = {
  // id: 11,
  name: 'Grace Hopper',
  position: 'Senior Developer',
  age: 45,
  skills: ['JavaScript', 'Node.js', 'Docker', 'Kubernetes'],
  salary: 10000,
  personalInfo: {
    address: '345 Tech Dr, Anytown',
    phone: '555-1122',
    email: 'grace.hopper@example.com',
  },
};

const newEmployees = [
  {
    // id: 12,
    name: 'Alan Turing',
    position: 'AI Researcher',
    age: 38,
    skills: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
    salary: 11000,
    personalInfo: {
      address: '678 Logic Ln, Anytown',
      phone: '555-3344',
      email: 'alan.turing@example.com',
    },
  },
  {
    // id: 13,
    name: 'Ada Lovelace',
    position: 'Data Architect',
    age: 32,
    skills: ['SQL', 'Data Modeling', 'ETL', 'Cloud Computing'],
    salary: 9500,
    personalInfo: {
      address: '901 Algorithm Ave, Anytown',
      phone: '555-5566',
      email: 'ada.lovelace@example.com',
    },
  },
];

const employees: Employee[] = [
  {
    // id: 1,
    name: 'Alice Smith',
    position: 'Software Engineer',
    age: 28,
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    salary: 7500,
    personalInfo: {
      address: '123 Main St, Anytown',
      phone: '555-1234',
      email: 'alice.smith@example.com',
    },
  },
  {
    // id: 2,
    name: 'Bob Johnson',
    position: 'Data Scientist',
    age: 35,
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    salary: 9000,
    personalInfo: {
      address: '456 Oak Ave, Anytown',
      phone: '555-5678',
      email: 'bob.johnson@example.com',
    },
  },
  {
    // id: 3,
    name: 'Charlie Brown',
    position: 'Project Manager',
    age: 42,
    skills: ['Project Management', 'Agile', 'Scrum', 'Communication'],
    salary: 8000,
    personalInfo: {
      address: '789 Pine Ln, Anytown',
      phone: '555-9012',
      email: 'charlie.brown@example.com',
    },
  },
  {
    // id: 4,
    name: 'Diana Miller',
    position: 'Software Engineer',
    age: 25,
    skills: ['Java', 'Spring', 'REST APIs', 'AWS'],
    salary: 6800,
    personalInfo: {
      address: '101 Elm Rd, Anytown',
      phone: '555-3456',
      email: 'diana.miller@example.com',
    },
  },
  {
    // id: 5,
    name: 'Eve Williams',
    position: 'Data Analyst',
    age: 30,
    skills: ['Excel', 'SQL', 'Data Visualization', 'Tableau'],
    salary: 7200,
    personalInfo: {
      address: '222 Maple Dr, Anytown',
      phone: '555-7890',
      email: 'eve.williams@example.com',
    },
  },
  {
    // id: 6,
    name: 'Frank Cooper',
    position: 'DevOps Engineer',
    age: 33,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    salary: 8500,
    personalInfo: {
      address: '333 Cloud St, Anytown',
      phone: '555-2468',
      email: 'frank.cooper@example.com',
    },
  },
  {
    // id: 7,
    name: 'Grace Lee',
    position: 'UI/UX Designer',
    age: 29,
    skills: ['Figma', 'Adobe XD', 'HTML/CSS', 'User Research'],
    salary: 7000,
    personalInfo: {
      address: '444 Design Ave, Anytown',
      phone: '555-1357',
      email: 'grace.lee@example.com',
    },
  },
  {
    // id: 8,
    name: 'Henry Wilson',
    position: 'Backend Developer',
    age: 31,
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    salary: 7800,
    personalInfo: {
      address: '555 Server Ln, Anytown',
      phone: '555-9753',
      email: 'henry.wilson@example.com',
    },
  },
  {
    // id: 9,
    name: 'Isabella Martinez',
    position: 'Security Engineer',
    age: 36,
    skills: ['Penetration Testing', 'Cryptography', 'Network Security', 'Python'],
    salary: 8800,
    personalInfo: {
      address: '666 Security Blvd, Anytown',
      phone: '555-8642',
      email: 'isabella.martinez@example.com',
    },
  },
  {
    // id: 10,
    name: 'Jack Thompson',
    position: 'Mobile Developer',
    age: 27,
    skills: ['Swift', 'iOS Development', 'React Native', 'Firebase'],
    salary: 7300,
    personalInfo: {
      address: '777 Mobile Rd, Anytown',
      phone: '555-3579',
      email: 'jack.thompson@example.com',
    },
  },
  {
    // id: 11,
    name: 'Grace Hopper',
    position: 'Senior Developer',
    age: 45,
    skills: ['JavaScript', 'Node.js', 'Docker', 'Kubernetes'],
    salary: 10000,
    personalInfo: {
      address: '345 Tech Dr, Anytown',
      phone: '555-1122',
      email: 'grace.hopper@example.com',
    },
  },
  {
    // id: 12,
    name: 'Alan Turing',
    position: 'AI Researcher',
    age: 38,
    skills: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
    salary: 10000,
    personalInfo: {
      address: '678 Logic Ln, Anytown',
      phone: '555-3344',
      email: 'alan.turing@example.com',
    },
  },
  {
    // id: 13,
    name: 'Ada Lovelace',
    position: 'Data Architect',
    age: 32,
    skills: ['SQL', 'Data Modeling', 'ETL', 'Cloud Computing'],
    salary: 9500,
    personalInfo: {
      address: '901 Algorithm Ave, Anytown',
      phone: '555-5566',
      email: 'ada.lovelace@example.com',
    },
  }
];

const projects: Project[] = [
  {
    id: 'proj-001',
    name: 'Customer Portal Overhaul',
    budget: 250000,
    team: [1, 4, 7], // Alice (Frontend), Diana (Backend), Grace (UI/UX)
  },
  {
    id: 'proj-002',
    name: 'Enterprise Security Suite',
    budget: 300000,
    team: [9, 6, 3], // Isabella (Security), Frank (DevOps), Charlie (PM)
  },
  {
    id: 'proj-003',
    name: 'Mobile Banking App',
    budget: 180000,
    team: [10, 7, 8], // Jack (Mobile), Grace (UI/UX), Henry (Backend)
  },
  {
    id: 'proj-004',
    name: 'Business Intelligence Dashboard',
    budget: 200000,
    team: [2, 5, 1], // Bob (Data Science), Eve (Data Analysis), Alice (Frontend)
  },
  {
    id: 'proj-005',
    name: 'Cloud Infrastructure Migration',
    budget: 350000,
    team: [6, 8, 3], // Frank (DevOps), Henry (Backend), Charlie (PM)
  },
];
