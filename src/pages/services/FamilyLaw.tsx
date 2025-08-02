import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FamilyLaw = () => {
  const services = [
    'Divorce & Separation',
    'Mutual Consent Divorce',
    'Contested Divorce',
    'Legal Separation',
    'Child Custody & Support',
    'Child Custody Arrangements',
    'Visitation Rights',
    'Child Support Orders',
    'Adoption Proceedings',
    'Domestic Violence Protection',
    'Protection Orders',
    'Domestic Violence Cases',
    'Harassment Claims',
    'Matrimonial Disputes',
    'Maintenance & Alimony',
    'Property Settlement',
    'Inheritance Matters',
    'Family Mediation'
  ];

  const approach = [
    {
      title: 'Compassionate Advocacy',
      description: 'We understand the emotional complexity of family matters and provide sensitive, supportive legal guidance throughout the process.'
    },
    {
      title: 'Child-Focused Solutions',
      description: 'In matters involving children, we prioritize their best interests while protecting parental rights and maintaining family relationships where possible.'
    },
    {
      title: 'Mediation & Settlement',
      description: 'We encourage amicable resolution through mediation and negotiation to minimize conflict and preserve family relationships.'
    },
    {
      title: 'Confidential Handling',
      description: 'All family matters are handled with utmost confidentiality and discretion to protect our clients\' privacy and dignity.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-foreground">Family Law</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/#services">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Family Law</h1>
                  <p className="text-xl text-muted-foreground">Compassionate Legal Guidance for Family Matters</p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RP Legal Associates provides compassionate and comprehensive family law services to help families 
                navigate through difficult times with dignity and care. We understand that family legal matters 
                are often emotionally charged and require sensitive handling combined with strong legal advocacy.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our family law practice covers all aspects of domestic relations including divorce and separation, 
                child custody and support, adoption, domestic violence protection, and matrimonial disputes. We 
                work closely with our clients to understand their unique circumstances and develop strategies 
                that protect their interests while minimizing emotional and financial stress.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We believe in exploring all available options for resolution, including mediation and collaborative 
                law approaches, while always being prepared to provide strong courtroom advocacy when necessary. 
                Our goal is to achieve outcomes that serve the best interests of all family members, especially children.
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Family Law Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Approach to Family Law</h2>
              <div className="space-y-6">
                {approach.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Need Family Legal Support?</h3>
              <p className="text-muted-foreground mb-6">
                Going through a family legal matter? Our compassionate team is here to guide you through this difficult time.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Confidential Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Compassionate Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Child-Focused Solutions</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Schedule Consultation
              </Button>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Sensitive family matters support
                </p>
                <p className="text-lg font-semibold text-secondary text-center mt-2">
                  +91-9876543210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyLaw;