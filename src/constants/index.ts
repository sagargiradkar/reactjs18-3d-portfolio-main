import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
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
    icon: creator,
  },
  {
    title: "Full Stack Java Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "React-Native Full Stack Developer Intern",
    companyName: "Real List.Ai Technologies,Benguluru",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jully 2024 - Octomber 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a cross-platform mobile app with React Native, enhancing UI and boosting data retrieval by 40% using Express.js & Node.js for over 5,000 active users.",
    ],
  },
  {
    title: "React Native Developer Intern",
    companyName: "Girl Script Summer of Code , Pune , India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Developing and maintaining applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Designed a healthcare app UI using React Native, improving user engagement and reducing support queries by 30%.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Argyle Enigma Tech Lab ,Ahemadabad",
    icon: shopify,
    iconBg: "#383E56",
    date: "Octomber 2023 - April 2024",
    points: [
      "Developed and deployed RESTful APIs for the Fili: Financial Literacy app, showcasing React Native skills and app publishing on Google Play.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilized JIRA for project management, ensuring efficient task tracking.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Kamlesh Jambhulkar",
    designation: "Founder",
    company: "Smile Computer Education",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "Razorpay Clone Website UI",
    description:
      "A clone of Razorpay's UI, showcasing a sleek and functional interface for businesses to manage payments, built with HTML, CSS, and Tailwind for a responsive and modern design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/sagargiradkar/Razorpay-Clone",
  },
  {
    name: "Shopping Cart App UI",
    description:
      "A shopping cart app built with React, Redux, and Tailwind CSS. It enables browsing products, managing a cart, and proceeding to checkout with centralized state management using Redux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/sagargiradkar/shopping-cart",
  },
  {
    name: "Hotstar Website Clone UI",
    description:
      "A clone of Disney+ Hotstar's UI, providing an immersive experience for browsing and streaming content. Built with Next.js, Supabase, and CSS for seamless performance and aesthetics.",
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
    sourceCodeLink: "https://github.com/sagargiradkar/Disney-Hostar-website",
  },
];


export { services, technologies, experiences, testimonials, projects };
