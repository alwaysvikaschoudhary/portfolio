import scmHome from '../assets/scm/Home.png'
import scmContact from '../assets/scm/Contact.png'
import scmProfile from '../assets/scm/Profile.png'
import scmFeatures from '../assets/scm/Features.png'
import scmLogin from '../assets/scm/Login.png'
import scmService from '../assets/scm/Service.png'

export interface Project {
  name: string
  tagline: string
  description: string
  fullDescription?: string
  bullets: string[]
  keyFeatures?: string[]
  tech: string[]
  github: string
  demo: string | null
  accent: 'cyan' | 'purple'
  image?: string
  images?: string[]
  category: 'fullstack' | 'backend' | 'frontend' | 'flutter'
}

export const projects: Project[] = [
  {
    name: 'Smart Contact Manager',
    category: 'fullstack',
    tagline: 'Secure Contact Management System',
    description:
      'A production-grade full-stack contact management system with user authentication, email verification, and personalized contact storage — built with Java, Spring Boot, and Spring Security.',
    fullDescription: 'The Smart Contact Manager is a comprehensive solution for managing professional and personal contacts securely. It features a robust backend architecture using Spring Boot and Hibernate, ensuring data integrity and efficient CRUD operations. The system is secured with Spring Security, implementing role-based access control to protect sensitive user information.',
    bullets: [
      'User authentication, email verification, and personalized contact storage with secure login.',
      'RESTful APIs for CRUD operations, search functionality, and user profile management.',
      'Spring Security with role-based access control protecting all user data.',
    ],
    keyFeatures: [
      'User Authentication & Authorization using Spring Security.',
      'Email Verification workflows integrated with Mailtrap.',
      'Personalized contact storage with search and filtering capabilities.',
      'Responsive UI built with HTML, CSS, and JavaScript.',
      'Profile management and secure login mechanisms.'
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Hibernate', 'Mailtrap'],
    github: '#',
    demo: null,
    accent: 'cyan',
    image: scmHome,
    images: [scmHome, scmFeatures, scmService, scmLogin, scmContact, scmProfile]
  },
  {
    name: 'Food Delivery App',
    category: 'fullstack',
    tagline: 'Online Food Ordering System',
    description:
      'A full-stack food delivery platform with user authentication, restaurant listing, cart management, and order processing — end-to-end with Spring Boot and MySQL.',
    fullDescription: 'This application provides a seamless experience for users to browse restaurants, manage their carts, and place orders online. It leverages the power of Spring Boot for a scalable backend and MySQL for structured data storage. The application is designed with a focus on smooth user interaction and dynamic UI rendering.',
    bullets: [
      'User auth, restaurant listing, cart management, and order processing flows.',
      'RESTful APIs to manage users, restaurants, menus, and orders with proper HTTP methods.',
      'Spring Security for secure login, registration, and role-based access control.',
    ],
    keyFeatures: [
      'Restaurant listing and detailed menu management.',
      'Advanced cart management and order processing flows.',
      'Secure login and registration with Spring Security.',
      'Structured data storage using MySQL for users, restaurants, and orders.',
      'Dynamic UI rendering for a responsive user experience.'
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'MySQL'],
    github: '#',
    demo: null,
    accent: 'purple',
    image: '/scm-dashboard.png' // Using same image as placeholder
  },
  {
    name: 'AI Image Generator',
    category: 'frontend',
    tagline: 'Creative AI Art Creation',
    description:
      'An advanced AI-powered platform that generates stunning images from text descriptions, featuring user galleries and community interaction.',
    bullets: [
      'Integration with DALL-E and Stable Diffusion APIs for high-quality image generation.',
      'Real-time image processing and cloud storage for user-generated content.',
      'Community feed with liking, sharing, and prompt exploration features.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'OpenAI API'],
    github: '#',
    demo: '#',
    accent: 'cyan',
  },
  {
    name: 'Crypto Dashboard',
    category: 'frontend',
    tagline: 'Real-time Market Analytics',
    description:
      'A comprehensive cryptocurrency tracking dashboard with real-time price updates, portfolio management, and advanced chart analytics.',
    bullets: [
      'Live price feeds via WebSocket integration with major crypto exchanges.',
      'Interactive charts with multiple timeframes and technical indicators.',
      'Portfolio tracking with profit/loss analytics and historical data visualization.',
    ],
    tech: ['React', 'D3.js', 'Chart.js', 'CoinGecko API'],
    github: '#',
    demo: '#',
    accent: 'purple',
  },
  {
    name: 'Task Management API',
    category: 'backend',
    tagline: 'Scalable Task Microservice',
    description:
      'A robust RESTful API for task management featuring JWT authentication, PostgreSQL storage, and comprehensive Swagger documentation.',
    bullets: [
      'Implemented secure JWT-based authentication and authorization.',
      'Designed normalized database schema for efficient task and user management.',
      'Integrated Swagger for interactive API documentation and testing.',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    github: '#',
    demo: null,
    accent: 'cyan',
  },
  {
    name: 'Fitness Tracker App',
    category: 'flutter',
    tagline: 'Cross-platform Health App',
    description:
      'A beautiful and performant mobile application for tracking workouts, nutrition, and health metrics across iOS and Android.',
    bullets: [
      'Built with Flutter for a consistent native experience on both platforms.',
      'Integrated Firebase for real-time data sync and user authentication.',
      'Features custom animations and interactive health progress charts.',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'SQLite'],
    github: '#',
    demo: null,
    accent: 'purple',
  },
]

