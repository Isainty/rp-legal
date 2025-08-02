import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gavel, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CriminalDefense = () => {
  const services = [
    'White Collar Crime Defense',
    'Financial Fraud Cases',
    'Money Laundering (PMLA)',
    'Corporate Crime Defense',
    'Economic Offences',
    'Bank Fraud Cases',
    'Cyber Crime Defense',
    'Regulatory Violations',
    'Securities Law Violations',
    'Tax Evasion Cases',
    'FEMA Violations',
    'General Criminal Defense',
    'Bail Applications',
    'Pre-trial Motions',
    'Trial Advocacy',
    'Appeal Proceedings',
    'Investigation Support',
    'Legal Notice Responses'
  ];

  const specializations = [
    {
      title: 'White Collar Crime',
      description: 'Defending professionals and executives in complex financial crime cases including fraud, embezzlement, and regulatory violations.'
    },
    {
      title: 'Economic Offences',
      description: 'Expert defense in cases involving economic crimes, money laundering, and violations of financial regulations.'
    },
    {
      title: 'Corporate Criminal Law',
      description: 'Representing companies and their officers in criminal proceedings involving corporate liability and compliance failures.'
    },
    {
      title: 'Regulatory Defense',
      description: 'Defending against criminal charges arising from violations of various regulatory frameworks including SEBI, RBI, and others.'
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
            <span className="text-foreground">Criminal Defense</span>
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
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Gavel className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Criminal Defense</h1>
                  <p className="text-xl text-muted-foreground">Aggressive Defense for Criminal Matters</p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RP Legal Associates provides aggressive and strategic criminal defense representation for individuals 
                and corporations facing criminal charges. Our experienced criminal defense team specializes in white 
                collar crimes, economic offences, regulatory violations, and general criminal matters.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand that criminal charges can have devastating consequences on your personal and professional 
                life. Our approach combines thorough investigation, strategic defense planning, and skilled advocacy 
                to protect our clients' rights and achieve the best possible outcomes. We handle cases at all stages 
                from investigation through trial and appeals.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our criminal defense practice covers a wide range of matters including financial crimes, regulatory 
                violations, corporate criminal liability, and traditional criminal offenses. We work closely with 
                forensic experts, investigators, and other specialists to build strong defense strategies.
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Criminal Defense Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Specializations</h2>
              <div className="space-y-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{spec.title}</h3>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Need Criminal Defense?</h3>
              <p className="text-muted-foreground mb-6">
                Facing criminal charges? Time is critical. Contact our expert criminal defense team immediately.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Immediate Legal Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Confidential Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Expert Defense Strategy</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Get Defense Counsel
              </Button>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  24/7 Emergency Criminal Defense
                </p>
                <p className="text-lg font-semibold text-primary text-center mt-2">
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

export default CriminalDefense;