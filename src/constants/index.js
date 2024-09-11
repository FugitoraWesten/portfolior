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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
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
    title: "Web design",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Cross platform app Development",
    icon: mobile,
  },
  {
    title: "Content Creation",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Planning & Research",
    company_name: "Gathering info",
    icon: creator,
    iconBg: "#383E56",
    date: "15-20%",
    points: [
      "In this initial phase, we define the project's scope and objectives, ensuring a clear understanding of the client's vision. Comprehensive research is conducted to gather insights, analyze market trends, and identify potential challenges. The technical requirements and tools needed for development are outlined, including platform selection and technology stacks. This step culminates in the creation of a detailed roadmap that will guide the entire development process.",
    ],
  },
  {
    title: "Design & Prototyping",
    company_name: "UI/UX",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "20-25%",
    points: [
      "The design phase focuses on creating wireframes and prototypes that represent the user interface and functionality of the product. User experience (UX) and user interface (UI) are carefully planned to ensure a smooth, intuitive experience. Visual elements, color schemes, and layout are finalized, and interactive prototypes are developed for testing. Feedback is gathered during this stage to refine the design and ensure alignment with the project goals.",
    ],
  },
  {
    title: "Development & Implementation",
    company_name: "Actual coding,",
    icon: reactjs,
    iconBg: "#383E56",
    date: "40-50%",
    points: [
      "Once the design is approved, the development team begins building the product by writing the necessary code. Backend development, database configuration, and frontend integration occur simultaneously to ensure smooth functionality. Rigorous testing is conducted during this stage to identify and fix bugs or performance issues. This phase is crucial for transforming the design into a fully functional digital product, ready for the next step.",
    ],
  },
  {
    title: "Testing & Deployment",
    company_name: "Deployment",
    icon: github,
    iconBg: "#E6DEDD",
    date: "10-15%",
    points: [
      "The product undergoes comprehensive testing to ensure that it functions as expected, addressing any bugs, security vulnerabilities, or usability issues. Both automated and manual testing are used to evaluate performance, compatibility, and responsiveness. After successful testing, the product is deployed to the live environment or app store, making it accessible to users. Post-launch support and maintenance are provided to monitor performance and implement updates or improvements as needed.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "...",
    designation: "CEO",
    company: "Abugida",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Bety",
    designation: "Teacher",
    company: "Abugida",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Engeda",
    designation: "teacher",
    company: "Abugida",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Parking",
    description:
      "Mobile application that enables users to find, reserve, and manage parking spaces from various providers, offering a convenient and efficient solution for parking needs.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blind Stick",
    description:
      "The app is designed to assist visually impaired users by capturing images and providing descriptive feedback through text-to-speech. It also includes a map feature to guide users, enhancing navigation.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Emision system",
    description:
      "Advanced smart emission system designed for factory installations that monitors and manages emissions while automatically detecting and extinguishing fires, providing a comprehensive and proactive solution for maintaining safety and compliance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
