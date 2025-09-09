import { useState } from 'react';
import { Github, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
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
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'completed' | 'in-progress'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.status === filter;
  });

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-muted/30">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest Web3 projects showcasing blockchain development, 
            smart contracts, and decentralized applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-background rounded-lg shadow-sm">
            {(['all', 'featured', 'completed', 'in-progress'] as const).map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilter(filterType)}
                className={filter === filterType ? 'bg-web3-gradient text-white' : ''}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="web3-card p-6 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative mb-4 rounded-lg overflow-hidden bg-muted aspect-video">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className="flex items-center gap-1"
                  >
                    {project.status === 'completed' ? (
                      <CheckCircle size={12} />
                    ) : (
                      <Clock size={12} />
                    )}
                    {project.status === 'completed' ? 'Live' : 'In Progress'}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:border-primary hover:text-primary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.status === 'completed' && (
                    <Button
                      size="sm"
                      className="flex-1 web3-button"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found for the selected filter.</p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="hover:border-primary hover:text-primary glow-on-hover"
            onClick={() => window.open('https://github.com/vasugarg', '_blank')}
          >
            View All Projects on GitHub
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;