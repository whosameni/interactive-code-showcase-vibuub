
import { Project, ProjectCategory } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    status: 'completed',
    category: 'web',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    features: [
      'User authentication & authorization',
      'Product catalog with search & filters',
      'Shopping cart & checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for inventory management'
    ],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A React Native mobile app for task management with real-time synchronization, offline support, and collaborative features.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    status: 'completed',
    category: 'mobile',
    githubUrl: 'https://github.com/yourusername/task-manager',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    features: [
      'Create, edit, and delete tasks',
      'Real-time synchronization across devices',
      'Offline support with local storage',
      'Team collaboration features',
      'Push notifications for reminders'
    ],
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive web dashboard displaying weather data with interactive charts, forecasts, and location-based services.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    status: 'completed',
    category: 'web',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-dashboard.com',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
    features: [
      'Current weather conditions',
      '7-day weather forecast',
      'Interactive weather maps',
      'Location-based weather data',
      'Responsive design for all devices'
    ],
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'AI Chat Bot',
    description: 'An intelligent chatbot powered by machine learning, capable of natural language processing and contextual conversations.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'NLP', 'Docker'],
    status: 'in-progress',
    category: 'api',
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    features: [
      'Natural language understanding',
      'Context-aware conversations',
      'Multi-language support',
      'Integration with popular messaging platforms',
      'Continuous learning capabilities'
    ],
    createdAt: '2024-04-05'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    status: 'planned',
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    features: [
      'Responsive design',
      'Smooth animations',
      'SEO optimized',
      'Fast loading times',
      'Contact form integration'
    ],
    createdAt: '2024-05-01'
  }
];

export const categories: ProjectCategory[] = [
  { id: 'all', name: 'All Projects', icon: 'apps', count: projects.length },
  { id: 'web', name: 'Web Apps', icon: 'globe', count: projects.filter(p => p.category === 'web').length },
  { id: 'mobile', name: 'Mobile Apps', icon: 'phone-portrait', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'api', name: 'APIs & Backend', icon: 'server', count: projects.filter(p => p.category === 'api').length },
  { id: 'desktop', name: 'Desktop Apps', icon: 'desktop', count: projects.filter(p => p.category === 'desktop').length },
];
