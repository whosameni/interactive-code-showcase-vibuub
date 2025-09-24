
import { Project, ProjectCategory } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bus Ticketing System',
    description: 'A C++ bus ticketing system that contains separate passenger and driver menus to manage bookings, routes, and buses. Features include user authentication, menu options, various routes, and payment integration.',
    technologies: ['C++, Git'],
    status: 'completed',
    category: 'programs',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    imageUrl: 'https://www.cttransit.com/sites/default/files/2023-08/New%20Haven%20BEB_2.jpg',
    features: [
      'User authentication & authorization',
      'Menu catalog for drivers & passengers',
      'Creation and viewings of routes',
      'Payment integration based off ticket',
    ],
    createdAt: '2024-11-04'
  },
  {
    id: '2',
    title: 'Hospital Simulation System',
    description: 'A C++ application that simulates all function of a hospital w/ doctors & patients. Features include  appointment scheduling, patient-detail retrieval, insurance verification, and validation.',
    technologies: ['C++, Git'],
    status: 'completed',
    category: 'programs',
    githubUrl: 'https://bitbucket.org/2212demonq/final-project/src',
    imageUrl: 'https://www.simovate.com/public/blog/what-is-hospital-simulation-and-why-is-it-important-6683f8660de3a.webp',
    features: [
      'Create, modify, and delete patient appointments',
      'Doctor, patient, nurse, & insurance authentication',
      'Encrypted doctor & nurse login in information',
    ],
    createdAt: '2024-12-01'
  },
  {
    id: '3',
    title: 'ShowCASE',
    description: 'A responsive mobile app that displays my projects with interactive pathways.',
    technologies: ['React Native, Expo'],
    status: 'in-progress',
    category: 'mobile',
    githubUrl: 'https://github.com/whosameni/interactive-code-showcase-vibuub',
    liveUrl: 'https://your-weather-dashboard.com',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
    features: [
      'Front page w/ introduction and appealing layout.',
      'dedicated "Projects" section displaying projects with interactive elements.',
      'simple navigation system to easily browse through your projects.',
    ],
    createdAt: '2025-09-24'
  }
];

export const categories: ProjectCategory[] = [
  { id: 'all', name: 'All Projects', icon: 'apps', count: projects.length },
  { id: 'programs', name: 'Programs', icon: 'globe', count: projects.filter(p => p.category === 'programs').length },
  { id: 'mobile', name: 'Mobile Apps', icon: 'phone-portrait', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'api', name: 'APIs & Backend', icon: 'server', count: projects.filter(p => p.category === 'api').length },
  { id: 'desktop', name: 'Desktop Apps', icon: 'desktop', count: projects.filter(p => p.category === 'desktop').length },
];
