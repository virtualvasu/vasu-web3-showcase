import { useState, useEffect } from 'react';

interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
  skills: {
    categories: Array<{
      name: string;
      skills: Array<{
        name: string;
        level: number;
      }>;
    }>;
  };
  projects: Array<{
    id: number;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    imageUrl: string;
    featured: boolean;
    status: 'completed' | 'in-progress';
  }>;
  experience: Array<{
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    techStack: string[];
  }>;
  education: Array<{
    id: number;
    institution: string;
    degree: string;
    field: string;
    duration: string;
    location: string;
    gpa?: string;
    percentage?: string;
    achievements: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    credentialUrl: string;
  }>;
  achievements: Array<{
    title: string;
    description: string;
  }>;
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/portfolio-data.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const portfolioData = await response.json();
        setData(portfolioData);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};