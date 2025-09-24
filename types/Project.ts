
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  features: string[];
  createdAt: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}
