import { useEffect } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { data, loading, error } = usePortfolioData();

  useEffect(() => {
    // Update document title and meta description
    if (data) {
      document.title = `${data.personal.name} - ${data.personal.title}`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `${data.personal.name} - ${data.personal.bio.substring(0, 150)}...`
        );
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      
      if (ogTitle) {
        ogTitle.setAttribute('content', `${data.personal.name} - ${data.personal.title}`);
      }
      
      if (ogDescription) {
        ogDescription.setAttribute('content', data.personal.bio);
      }
    }
  }, [data]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">⚠️</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Oops! Something went wrong</h1>
          <p className="text-muted-foreground">
            {error || 'Failed to load portfolio data. Please try refreshing the page.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header data={data.personal} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero data={data.personal} social={data.social} personal={data.personal} />

        {/* Experience & Education Section */}
        <Experience experience={data.experience} education={data.education} />

        {/* Projects Section */}
        <Projects projects={data.projects} />

        {/* Skills Section */}
        <Skills skills={data.skills} />

        {/* Contact Section */}
        <Contact personal={data.personal} social={data.social} />
      </main>

      {/* Footer */}
      <Footer personal={data.personal} social={data.social} />
    </div>
  );
};

export default Index;