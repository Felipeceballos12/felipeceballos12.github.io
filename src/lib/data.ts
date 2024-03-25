import musicapp from '../assets/musicapp.webp';
import mitadmitad from '../assets/mitadmitad.webp';
import bookapp from '../assets/bookapp.webp';
import vethouse from '../assets/vethouse.webp';

export const projects = [
  {
    id: crypto.randomUUID(),
    name: 'Musicapp',
    image: musicapp,
    description: 'Web Music player using Spotify API',
    stack: ['Expo', 'React Native', 'React', 'React Navigation'],
    link: 'https://github.com/Felipeceballos12/musicapp',
  },
  {
    id: crypto.randomUUID(),
    name: 'MitadMitad',
    image: mitadmitad,
    description:
      'Prototype for a restaurant bill splitter application',
    stack: ['Figma'],
    link: 'https://www.figma.com/proto/FfkYq5JDGuyJTESF59D9xP/MitadMitad?type=design&node-id=324-2620&t=RVpKgTQrXmbMtbGq-0&scaling=min-zoom&page-id=324%3A2619&starting-point-node-id=324%3A2620',
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
    startDate: 'Jul 2022',
    endDate: 'Present',
    rol: 'FrontEnd Developer',
    name: 'Autovisas',
    /* description: [
      `Engaged in executing studies, trial runs with users,
      brainstorming, sketching blueprints, and crafting refined
      user experiences and user interfaces for iOS, Android, and
      the Web. Closely partnering with engineers, product
      supervisors, and important personnel. Designing experiences
      that are guided by data and centered on the user`,
    ], */
  },
  {
    id: crypto.randomUUID(),
    startDate: 'May 2021',
    endDate: 'Oct 2021',
    rol: 'Freelance Web Developer',
    name: 'The Stella Way Consulting',
    description: [
      'Transformed a cluttered website into a sleek and cohesive platform, resulting in a 2x surge in site traffic and a substantial increase in conversions.',
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
