import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Building, Target, Heart, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2012', event: 'Firm Established in Dhanbad' },
    { year: '2015', event: 'Expansion to Corporate Law' },
    { year: '2017', event: 'Ranchi Office Opened' },
    { year: '2025', event: '25+ Legal Professionals' },
  ];

  const strengths = [
    {
      icon: Building,
      title: 'Experienced Team',
      description: 'Our seasoned lawyers bring decades of combined experience across various legal domains.',
    },
    {
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'We prioritize our clients\' needs and provide personalized legal solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over 500 successful cases and satisfied clients across India.',
    },
    {
      icon: Shield,
      title: 'Timely Service',
      description: 'We understand the importance of time in legal matters and ensure prompt service delivery.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our History
            </h2>
            <p className="text-xl text-muted-foreground">
              Building Excellence Since 2012
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2012 by <strong>Mr. Ratan Prasad</strong>, RP Legal Associates began with a vision to provide 
                accessible, high-quality legal services to individuals and businesses across India. What started as a 
                small practice has evolved into a full-service law firm with over 25 legal professionals.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey has been marked by significant milestones, including expansion to Delhi, successful 
                representation in landmark cases, and recognition as one of the leading law firms in 
                Jharkhand/Bihar Region.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to uphold our founding principles of integrity, excellence, and client-centric 
                service while adapting to the evolving legal landscape.
              </p>

              {/* Gallery Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Our Firm Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" 
                      alt="Modern Office"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop" 
                      alt="Legal Research"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg shadow-md group">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" 
                      alt="Team Meeting"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <Link to="/our-team">
                <Button variant="outline" size="lg" className="mt-6">
                  Learn More About Our Firm
                </Button>
              </Link>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center space-x-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {item.year.slice(-2)}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">{item.year}</div>
                      <div className="text-muted-foreground">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Strength
            </h2>
            <p className="text-xl text-muted-foreground">
              What Makes Us Different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;