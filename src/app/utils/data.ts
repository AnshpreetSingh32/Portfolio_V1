export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About Me', path: '#about' },
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
    name: 'Countries App',
    repo: 'https://github.com/grazziotti/rest-countries-api',
    url: 'https://rest-countries-api-grazziotti.vercel.app/',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description:
      'The Countries App is a web application that provides information about different countries around the world.',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Space Tourism Website',
    repo: 'https://github.com//grazziotti/space-tourism-website',
    url: 'https://space-tourism-website-grazziotti.vercel.app/',
    image:
      'https://i.ibb.co/c17p422/Screenshot-2023-07-16-at-00-54-48-Space-Tourism-Website.png',
    description: 'Multi-page website with a space theme.',
    tags: ['react', 'typescript', 'styled-components']
  },
  {
    name: 'Interactive Comments Section',
    repo: 'https://github.com/grazziotti/interactive-comments-section',
    url: 'https://interactive-comments-section-eta.vercel.app/',
    image:
      'https://i.ibb.co/4WNm2qY/Screenshot-2023-07-14-at-23-31-53-Frontend-Mentor-Interactive-comments-section.png',
    description: 'Interactive comments section. CRUD. Client-side.',
    tags: ['react', 'typescript', 'styled-components']
  },
  {
    name: 'Comment API',
    repo: 'https://github.com/grazziotti/comment-api',
    url: false,
    image:
      'https://i.ibb.co/BKRLTZx/Screenshot-2024-03-05-at-23-44-09-Swagger-UI.png',
    description: 'REST API for comments.',
    tags: ['express', 'api', 'backend', 'nodejs', 'typescript']
  },
  {
    name: 'Job Listings with Filtering',
    repo: 'https://github.com/grazziotti/job-listings-with-filtering',
    url: 'https://job-listings-with-filtering-khaki.vercel.app/',
    image:
      'https://i.ibb.co/47J3Fjt/Screenshot-2023-09-09-at-20-29-20-Frontend-Mentor-Job-Listings.png',
    description: 'Local data listing with filtering.',
    tags: ['react', 'typescript', 'bem']
  },
  {
    name: 'ToDo App',
    repo: 'https://github.com/grazziotti/todo-app',
    url: 'https://grazziotti.github.io/todo-app/',
    image:
      'https://i.ibb.co/Wg5GvD2/Screenshot-2023-07-15-at-23-25-42-Frontend-Mentor-Todo-app.png',
    description: 'A task list application.',
    tags: ['html', 'css', 'javascript', 'bem']
  },
  {
    name: 'Weather App',
    repo: 'https://github.com/grazziotti/weather-app',
    url: 'https://grazziotti.github.io/weather-app',
    image:
      'https://i.ibb.co/zhPsH8D/Screenshot-2023-09-09-at-21-02-56-Weather-App.png',
    description:
      'An application that provides updated weather information anywhere in the world.',
    tags: ['html', 'css', 'javascript', 'api']
  },
  {
    name: 'Rock-paper-scissors Game',
    repo: 'https://github.com/grazziotti/rock-paper-scissors-game',
    url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
    image:
      'https://i.ibb.co/d7FczYy/Screenshot-2023-09-09-at-21-06-42-Frontend-Mentor-Rock-Paper-Scissors.png',
    description: 'A classic rock-paper-scissors game available online.',
    tags: ['html', 'css', 'javascript', 'bem']
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
