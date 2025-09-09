import { MapPin, Calendar, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  percentage?: string;
  achievements: string[];
}

interface ExperienceProps {
  experience: Experience[];
  education: Education[];
}

const Experience = ({ experience, education }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through professional experience and academic achievements in technology and blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-primary" size={24} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="web3-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {exp.position}
                    </h4>
                    <h5 className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </h5>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h6 className="font-semibold mb-2 text-foreground">Key Achievements:</h6>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h6 className="font-semibold mb-2 text-foreground">Technologies:</h6>
                    <div className="flex flex-wrap gap-1">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-secondary" size={24} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="web3-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${(index + experience.length) * 100}ms` }}
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg font-semibold text-secondary mb-1">
                      {edu.institution}
                    </h5>
                    <p className="text-muted-foreground mb-2">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                      {(edu.gpa || edu.percentage) && (
                        <div className="font-semibold text-primary">
                          {edu.gpa ? `GPA: ${edu.gpa}` : `${edu.percentage}`}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h6 className="font-semibold mb-2 text-foreground">Achievements:</h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;