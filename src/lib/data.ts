import musicapp from '../assets/musicapp.webp';
import mitadmitad from '../assets/mitadmitad.webp';
import bookapp from '../assets/bookapp.webp';
import vethouse from '../assets/vethouse.webp';

export const projects = [
  {
    id: crypto.randomUUID(),
    name: 'MitadMitad',
    image: mitadmitad,
    description: 'Prototype for a restaurant bill splitter application',
    stack: ['Figma'],
    link: 'https://www.figma.com/proto/FfkYq5JDGuyJTESF59D9xP/MitadMitad?type=design&node-id=324-2620&t=RVpKgTQrXmbMtbGq-0&scaling=min-zoom&page-id=324%3A2619&starting-point-node-id=324%3A2620',
  },
  {
    id: crypto.randomUUID(),
    name: 'Musicapp',
    image: musicapp,
    description:
      "Web Music player using Spotify API, with navigation structure inspired by BlueSky's code.",
    stack: ['Expo', 'React Native', 'React', 'React Navigation'],
    link: 'https://github.com/Felipeceballos12/musicapp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Vet House',
    image: vethouse,
    description: 'Online Vet',
    stack: ['C#', 'JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/Felipeceballos12/VetHouse.App',
  },
  {
    id: crypto.randomUUID(),
    name: 'Book App',
    image: bookapp,
    description: 'Search for books using Google Books Api',
    stack: ['React', 'Vite'],
    link: 'https://github.com/Felipeceballos12/Book-App-Vite',
  },
];

export const experiences = [
  {
    id: crypto.randomUUID(),
    startDate: 'June 2024',
    endDate: 'Present',
    rol: 'Freelance Web Developer',
    name: 'Memorial Project',
    description: [
      'Built a complex memorial website using only HTML, CSS and vanilla JavaScript with custom animations',
      'Cut page load time from 4 minutes to 20 seconds by developing a custom image compression technique that shrunk files by 95% without quality loss',
      'Developed responsive asset loading system that serves device-specific resources to minimise bandwidth',
      'Used Intersection Observer API to load content only as users scroll into view, significantly improving site performance',
      'Crafted intricate CSS animations & keyframes to bring memorial content to life with smooth, engaging transitions',
      'Collaborated effectively through text-only communication, adapting to asynchronous workflow while maintaining quality',
    ],
  },
  {
    id: crypto.randomUUID(),
    startDate: 'Jul 2022',
    endDate: 'April 2024',
    rol: 'FrontEnd Developer',
    name: 'Autovisas',
    description: [
      'Built the first MVP for AutoVisas using Expo, React Native, React Navigation and React, focusing on operational efficiency and innovation.',
      'Led the UI/UX design efforts for AutoVisas, utilising Figma to create and refine high-fidelity prototypes.',
      'Repaired login functionalities using Kubernetes after an outage, leading the recovery effort.',
      'Built functional testing using Jest and Testing Library.',
      'Gained exposure to key technologies such as Kubernetes, Jenkins, AWS, and Kanban in the project environment.',
    ],
  },
  {
    id: crypto.randomUUID(),
    startDate: 'May 2021',
    endDate: 'Oct 2021',
    rol: 'Freelance Web Developer',
    name: 'The Stella Way Consulting',
    description: [
      'Redesigned and built a website using Zoho CRM',
      `Transformed a cluttered website into a sleek and cohesive platform, resulting in a 2x surge in site traffic and a substantial increase in conversions.`,
      'Implemented intuitive navigation and visually appealing layouts, boosting user engagement by 60%.',
      'Facilitated effective communication and collaboration in English and Spanish with the client, contributing to successful project delivery.',
      'Employed advanced techniques to enhance website performance, resulting in a 3x faster loading speed and a 40% reduction in page abandonment.',
    ],
  },
  {
    id: crypto.randomUUID(),
    startDate: 'Nov 2016',
    endDate: 'May 2017',
    rol: 'Aprendiz Técnico Programador de Sistemas de Información',
    name: 'DATECSA',
    description: [
      'Provided technical support to various sectors of the company, solving computer problems as they came up.',
      "Designed and created a web exam to streamline the company's recruitment processes. Using PHP, HTML, CSS, and frameworks like Laravel.",
    ],
  },
];
