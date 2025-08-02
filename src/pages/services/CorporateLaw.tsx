import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateLaw = () => {
  const services = [
    'Entity Formation & Registration',
    'Private Limited & Public Limited Companies',
    'Limited Liability Partnerships (LLP)',
    'Joint Ventures & Strategic Alliances',
    'Contract Drafting & Review',
    'Commercial Agreements',
    'Non-Disclosure Agreements',
    'Service Agreements',
    'Mergers & Acquisitions',
    'Due Diligence',
    'Share Purchase Agreements',
    'Asset Purchase Agreements',
    'Corporate Governance',
    'Board Resolutions',
    'Shareholder Agreements',
    'Compliance Management'
  ];

  const keyStrengths = [
    'Deep understanding of Indian corporate law landscape',
    'Expertise in complex cross-border transactions',
    'Proven track record with Fortune 500 companies',
    'End-to-end transaction management',
    'Regulatory compliance expertise',
    'Quick turnaround time for urgent matters'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-foreground">Corporate Law</span>
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
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Corporate Law</h1>
                  <p className="text-xl text-muted-foreground">Comprehensive Business Legal Solutions</p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RP Legal Associates has a well-established Corporate Law practice led by experienced Partners and a dedicated team. 
                The firm offers a comprehensive bouquet of services across the entire spectrum of corporate transactions to leading 
                Indian and multinational companies, start-ups, family businesses, and individual entrepreneurs.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our corporate practice encompasses entity formation, contract drafting and negotiation, mergers and acquisitions, 
                corporate governance, regulatory compliance, and strategic business advisory services. We pride ourselves on our 
                deal management capabilities, deep understanding of commercial issues, qualitative drafting skills, and the ability 
                to handle challenging structuring issues as well as complex negotiations within strict timelines.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The firm advises across the entire life cycle of corporate transactions from initial structuring all the way 
                through closing, including due diligence on target companies, regulatory framework analysis, drafting term sheets 
                and transactional documents, and post-transaction integration support.
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Corporate Law Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Why Choose Our Corporate Law Team</h2>
              <div className="space-y-4">
                {keyStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Get Expert Legal Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Need immediate assistance with corporate legal matters? Our experienced team is ready to help.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Free Initial Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Expert Legal Team</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Schedule Consultation
              </Button>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Call us directly for urgent matters
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

export default CorporateLaw;