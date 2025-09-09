import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsProps {
  skills: {
    categories: SkillCategory[];
  };
}

const Skills = ({ skills }: SkillsProps) => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars with staggered delay
            skills.categories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setVisibleBars((prev) => new Set(prev).add(`${category.name}-${skill.name}`));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills.categories]);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across blockchain development, full-stack web development, 
            and modern DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="web3-card p-6 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-gradient">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const isVisible = visibleBars.has(`${category.name}-${skill.name}`);
                  
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: isVisible ? '0ms' : '0ms',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Smart Contracts</div>
            </div>
            <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">TVL Managed</div>
            </div>
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;