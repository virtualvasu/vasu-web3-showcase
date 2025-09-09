import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    portfolio?: string;
  };
  personal: {
    email: string;
  };
}

const Hero = ({ data, social, personal }: HeroProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Animation Container */}
          <div className="floating-animation">
            {/* Profile Avatar */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-web3-gradient p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
              <span className="block text-foreground">{data.name}</span>
              <span className="block text-gradient mt-2">{data.title}</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up [animation-delay:200ms]">
              {data.tagline}
            </p>

            {/* Bio */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:400ms]">
                {data.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up [animation-delay:600ms]">
              <Button 
                className="web3-button"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="hover:border-primary hover:text-primary glow-on-hover"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in-up [animation-delay:800ms]">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 glow-on-hover"
              >
                <Github size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 glow-on-hover"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 glow-on-hover"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;