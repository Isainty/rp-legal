import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building2, Shield, Heart, Home, Scale, Briefcase, FileText, Lightbulb, Users } from 'lucide-react';

const Services = () => {
  const businessLawServices = [
    {
      title: 'Corporate Law',
      description: 'Entity formation, M&A, compliance, and corporate governance.',
      icon: Building2,
      link: '/services/corporate-law'
    },
    {
      title: 'Contract Law',
      description: 'Drafting, review, and dispute resolution for commercial contracts.',
      icon: FileText,
      link: '/services/corporate-law'
    },
    {
      title: 'Intellectual Property',
      description: 'Patent, trademark, copyright protection and enforcement.',
      icon: Lightbulb,
      link: '/services/corporate-law'
    }
  ];

  const litigationServices = [
    {
      title: 'Criminal Defense',
      description: 'Expert representation in criminal matters and bail applications.',
      icon: Shield,
      link: '/services/criminal-defense'
    },
    {
      title: 'Civil Defense',
      description: 'Commercial disputes, property litigation, and civil matters.',
      icon: Scale,
      link: '/services/civil-defense'
    },
    {
      title: 'Consumer Protection',
      description: 'Consumer forum representation and product liability cases.',
      icon: Users,
      link: '/services/civil-defense'
    }
  ];

  const personalLawServices = [
    {
      title: 'Family Law',
      description: 'Divorce, custody, matrimonial disputes, and family matters.',
      icon: Heart,
      link: '/services/family-law'
    },
    {
      title: 'Real Estate Law',
      description: 'Property transactions, title verification, and real estate disputes.',
      icon: Home,
      link: '/services/real-estate-law'
    },
    {
      title: 'Employment Law',
      description: 'Workplace disputes, labor law, and employment contracts.',
      icon: Briefcase,
      link: '/services/family-law'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Legal Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Legal Solutions Across All Practice Areas
          </p>
        </div>

        {/* Business Law Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Business & Corporate Law</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessLawServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group block"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Litigation Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Litigation & Defense</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {litigationServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group block"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Personal Law Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Personal & Family Law</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {personalLawServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group block"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;