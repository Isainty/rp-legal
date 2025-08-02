import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Shield, 
  Gavel, 
  Heart, 
  Home, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Entity formation, contracts, M&A, and corporate governance solutions for businesses of all sizes.',
      features: [
        'Entity Formation & Registration',
        'Contract Drafting & Review',
        'Mergers & Acquisitions',
        'Corporate Governance'
      ],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Civil Defense',
      description: 'Expert representation in complex civil disputes with proven track record of success.',
      features: [
        'Commercial Litigation',
        'Contract Disputes',
        'Property Disputes',
        'Personal Injury Cases'
      ],
      color: 'secondary'
    },
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Aggressive defense for white collar crimes and general criminal matters.',
      features: [
        'White Collar Crime',
        'Financial Fraud',
        'Regulatory Violations',
        'General Criminal Defense'
      ],
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Compassionate legal guidance for sensitive family matters and domestic relations.',
      features: [
        'Divorce & Separation',
        'Child Custody',
        'Domestic Violence',
        'Adoption Proceedings'
      ],
      color: 'secondary'
    },
    {
      icon: Home,
      title: 'Real Estate Law',
      description: 'Complete real estate legal services for residential and commercial properties.',
      features: [
        'Property Transactions',
        'Title Verification',
        'Zoning & Planning',
        'Construction Law'
      ],
      color: 'primary'
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="professional" 
                className="w-full group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;