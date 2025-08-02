import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CivilDefense = () => {
  const services = [
    'Commercial Litigation',
    'Contract Disputes',
    'Breach of Contract Claims',
    'Business Partnership Disputes',
    'Property Disputes',
    'Real Estate Litigation',
    'Landlord-Tenant Disputes',
    'Property Title Issues',
    'Personal Injury Cases',
    'Motor Vehicle Accidents',
    'Medical Malpractice',
    'Workplace Injuries',
    'Consumer Protection',
    'Product Liability',
    'Service Deficiency Claims',
    'Debt Recovery',
    'Arbitration & Mediation',
    'Alternative Dispute Resolution'
  ];

  const courtRepresentation = [
    'District Courts',
    'High Courts',
    'Supreme Court of India',
    'Consumer Forums',
    'Debt Recovery Tribunals',
    'National Company Law Tribunals',
    'Arbitration Tribunals'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-foreground">Civil Defense</span>
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
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Civil Defense</h1>
                  <p className="text-xl text-muted-foreground">Expert Representation in Civil Disputes</p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RP Legal Associates has a robust Civil Defense practice with a proven track record of successfully 
                representing clients in complex civil disputes across various forums. Our experienced litigation team 
                combines strategic thinking with aggressive advocacy to protect our clients' interests and achieve 
                favorable outcomes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We handle a wide spectrum of civil matters including commercial disputes, property litigation, 
                personal injury cases, consumer protection matters, and debt recovery proceedings. Our approach 
                focuses on thorough case preparation, strategic planning, and skilled courtroom advocacy to 
                ensure the best possible results for our clients.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The firm's civil litigation team regularly appears before various courts and tribunals including 
                District Courts, High Courts, Supreme Court of India, Consumer Forums, Debt Recovery Tribunals, 
                and specialized forums. We also have extensive experience in alternative dispute resolution 
                mechanisms including arbitration and mediation.
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Civil Defense Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Court Representation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Court Representation</h2>
              <p className="text-muted-foreground mb-6">
                Our experienced advocates represent clients before various judicial and quasi-judicial forums:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {courtRepresentation.map((court, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{court}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Need Legal Defense?</h3>
              <p className="text-muted-foreground mb-6">
                Facing a civil dispute? Our expert defense team is here to protect your rights and interests.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Case Assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Strategic Defense Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Court Representation</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Get Legal Defense
              </Button>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Emergency legal assistance
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

export default CivilDefense;