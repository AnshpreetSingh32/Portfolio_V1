
export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About Me', path: '#about' },
  { label: 'Experience', path: '#experience' },
  { label: 'Education', path: '#education' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Nex-Migrate',
    repo: 'https://github.com/AnshpreetSingh32/Nex_Migrate_Hosted.git',
    url: 'https://nex-migrate.netlify.app/',
    image:
      '/assets/Nex-Migrate.png',
    description:
      'A full-stack web portal simulating Windows 11 migration with Nexthink-like insights. Features admin/user dashboards, eligibility logic, migration triggers, ServiceNow automation, and secure JWT-based authentication for enterprise workflow simulation.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS', 'JWT', 'ServiceNow API', 'Nexthink', 'Nodemailer']
  },
  {
    name: 'Whats Cooking',
    repo: 'https://github.com/AnshpreetSingh32/Whats-Cooking.git',
    url: 'https://whats-cooking-v1.netlify.app/',
    image:
      '/assets/Whats-Cooking.png',
    description: 'A recipe discovery app built with React.js and Tailwind CSS. Uses TheMealDB API for ingredient-based search, random recipes, cuisine filters, responsive UI, and detailed recipe pages with error handling.',
    tags: ['React.js', 'Tailwind CSS', 'MealDB api']
  },
  {
    name: 'Personal Portfolio',
    repo: 'https://github.com/AnshpreetSingh32/Portfolio_V1.git',
    url: 'https://github.com/AnshpreetSingh32/Portfolio_V1.git',
    image:
      '/assets/Portfolio_Image.png',
    description: 'A modern portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Headless UI. Showcases projects, skills, and experience with smooth animations, responsive design, and an engaging user interface.',
    tags: ['Next.js', 'React.js', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'Headless UI']
  },
  {
    name: 'Video On Demand',
    repo: 'https://github.com/AnshpreetSingh32/Video_On_demand.git',
    url: false,
    image:
      '/assets/Video-on-Demand.png',
    description: 'A Netflix-inspired Java Swing application with OTP authentication, MySQL-backed profiles, and simulated streaming. Implemented Java networking for real-time data retrieval, enhancing Java programming, database handling, and user authentication skills.',
    tags: ['Java', 'JavaSwings', 'Java Networking', 'JDBC', 'MySQL']
  },
  {
    name: 'My Contact',
    repo: 'https://github.com/AnshpreetSingh32/MyContact.git',
    url: false,
    image:
      '/assets/MyContact.png',
    description: 'A console-based contact manager in C++ applying OOP principles. Includes add, edit, delete, and search functions with file handling to securely store and retrieve contact details efficiently.',
    tags: ['C++', 'OOPs', 'File Handling']
  }
  
]

export const skillsData = [
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img:'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img:'linux/linux-original.svg',
    name: 'Linux'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Next.js'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express.js'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  },
  {
    img: 'figma/figma-original.svg',
    name: 'Figma'
  }
]
