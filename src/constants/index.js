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
  docker,
  bb,
  cpr,
  laurel,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Systems Administrator",
    icon: backend,
  },
  {
    title: "Linux Administrator",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Geek Squad Agent, Home Theater Installer",
    company_name: "Best Buy",
    icon: bb,
    iconBg: "#00385f",
    date: "2013 - 2016",
    points: [
      "Provided Customer Service to advanced level issues in store and in home.",
      "Worked on in store device services such as data transfers and virus removals.",
      "Installed a wide range of home theater products in customers homes.",
    ],
  },
  {
    title: "Lead Repair Technician / Store Manager",
    company_name: "CPR Cell Phone Repair",
    icon: cpr,
    iconBg: "#8f0100",
    date: "2016 - 2019",
    points: [
      "Managed retail and repair employees.",
      "Performed advanced level repairs that came into our shop. I.E. Game Console repair, micro solder phone motherboard repairs ( iphone IC Chips, USB-C charging ports) and more.",
      "Maintained inventory on repair parts, device accessories, and used devices.",
    ],
  },
  {
    title: "IT Help Desk",
    company_name: "Laurel & Billings Public Schools",
    icon: laurel,
    iconBg: "#ffffff",
    date: "2019 - 2021",
    points: [
      "Assisted end users with ticket requests ranging from hardware and software problems to general education on systems.",
      "Assisted in hardware installation for new desktop and laptop stations and cat cable pulls for new networking installations.",
      "Maintained inventory of district hardware, repair parts, and software licenses. ",
    ],
  },
  {
    title: "IT Systems Administrator",
    company_name: "Laurel Public Schools",
    icon: laurel,
    iconBg: "#ffffff",
    date: "2021 - Present",
    points: [
      "Lead the redesign of the school district's new website, laurel.k12.mt.us, and educated all end users on the new site management system.",
      "Spearheaded the modernization of several district systems, such as Jira Cloud for IT and Facility project management, and SchoolSpace, for handling district facility rentals.",
      "Developed automation scripts with Powershell, Python, and Bash for handling student and staff enrollment, and security badge access, web app development pipelines, and more.",
      "Managed Windows and Linux based server and network environments across all district buildings.",
      "Developed several web applications for the District including documentation sites and network monitoring systems."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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