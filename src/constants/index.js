import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  django,
  flutter,
  onebyte,
  paakhealth,
  upwork,
  bakery,
  expenses,
  editor,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "PaakHealth",
    icon: paakhealth,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "During this internship, I alongside my team worked on developing the documentation of a health care application. Our goal was to provide a design and architecture solution for a health care application that manages a blood donation service and an ambulance service. Working here I learnt how different problems are solved in software development and what formats are used for communicating the information to the stakeholders.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "OneByte",
    icon: onebyte,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Worked as a Software Engineer Intern at Onebyte. During this internship, I worked with industry professionals to provide solution to creating alert queries in Elasticsearch and Opensearch. I also worked for the development of an API that manages all the requests to a Hospital Management System's server. And I worked for the documentation of HL7 which is a messaging format used for sharing information by health care providers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "I am currently a full-time web developer at Upwork, dedicated to exceeding client expectations through exceptional work. My approach involves thoroughly understanding client requirements to deliver projects that align perfectly with their vision. I specialize in both front-end and back-end development, ensuring a comprehensive solution for each project. Beyond Upwork, I am readily available for clients seeking my full-stack web development services. I pride myself on open communication and timely delivery, making the collaboration process seamless. Let’s create something amazing together!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bakery Management System",
    description:
      "This MERN Stack application is designed for an optimal user experience, featuring login/signup, product browsing, and booking management. Users can update their accounts and modify bookings, while an admin panel ensures efficient system management. The database is scalable and secure, with authentication and authorization for protected operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bakery,
    source_code_link:
      "https://github.com/a-arham-x/bakery-management-system-app",
  },
  {
    name: "Expense Tracker",
    description:
      "A Next.js expense tracking application that leverages its users to keep a track of their monthly expenses and provides them with an annual report. I have made use of Nextjs for developing the application frontend and Next.js api for developing the backend. I have made use of Prisma ORM for the easy management of data in the application",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "dashboards",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expenses,
    source_code_link: "https://github.com/a-arham-x/nextjs-expense-tracker",
  },
  {
    name: "Photo Editor",
    description:
      "A Next.js photo editor application that comes with variety of functionalities including image cropping, applying filters, rotating and image resizing. I have used Next.js for developing the application frontend an Next.js api for developing the backend. I have configured Prisma ORM inn the application for the management of all data and have made use of PostgreSQL database to store images and user information.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fabricjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: editor,
    source_code_link: "https://github.com/a-arham-x/photo-editor",
  },
];

export { services, technologies, experiences, testimonials, projects };
