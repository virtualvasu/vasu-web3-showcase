import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  personal: {
    name: string;
    title: string;
    email: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
}

const Footer = ({ personal, social }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: `mailto:${personal.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-web3-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{personal.name}</h3>
                <p className="text-sm text-muted-foreground">{personal.title}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting the future of decentralized web with innovative Web3 solutions, 
              smart contracts, and cutting-edge blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 glow-on-hover shadow-sm"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;