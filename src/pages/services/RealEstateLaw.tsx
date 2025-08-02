import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstateLaw = () => {
  const services = [
    'Property Transactions',
    'Sale & Purchase Agreements',
    'Lease & Rental Agreements',
    'Property Transfer Documentation',
    'Title Verification & Due Diligence',
    'Title Search & Examination',
    'Encumbrance Certificates',
    'Property Documentation Review',
    'Real Estate Development',
    'Project Development Approvals',
    'Joint Development Agreements',
    'Construction Contracts',
    'Zoning & Planning',
    'Land Use Permissions',
    'Building Plan Approvals',
    'Environmental Clearances',
    'Construction Law',
    'Builder-Buyer Disputes',
    'RERA Compliance',
    'Property Registration'
  ];

  const expertise = [
    {
      title: 'Residential Real Estate',
      description: 'Complete legal services for residential property transactions including apartments, villas, plots, and housing projects.'
    },
    {
      title: 'Commercial Real Estate',
      description: 'Expert handling of commercial property matters including office buildings, retail spaces, warehouses, and industrial properties.'
    },
    {
      title: 'Real Estate Development',
      description: 'Comprehensive legal support for real estate developers including project approvals, joint ventures, and regulatory compliance.'
    },
    {
      title: 'Property Disputes',
      description: 'Skilled representation in property disputes, title issues, boundary disputes, and real estate litigation matters.'
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
            <span className="text-foreground">Real Estate Law</span>
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
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Real Estate Law</h1>
                  <p className="text-xl text-muted-foreground">Complete Real Estate Legal Services</p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RP Legal Associates provides comprehensive real estate legal services for both residential and 
                commercial properties. Our experienced real estate team handles all aspects of property transactions, 
                from initial due diligence through closing, ensuring that our clients' interests are protected 
                throughout the process.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We assist individual buyers and sellers, real estate developers, investors, and financial institutions 
                with a full range of real estate matters including property transactions, title verification, 
                development projects, zoning issues, and construction law. Our thorough understanding of local 
                real estate laws and regulations enables us to provide practical solutions for complex property matters.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our real estate practice also includes representation in property disputes, RERA compliance matters, 
                and regulatory approvals. We work closely with property consultants, architects, and other 
                professionals to ensure seamless execution of real estate transactions and development projects.
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Real Estate Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Areas of Expertise</h2>
              <div className="space-y-6">
                {expertise.map((area, index) => (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-elegant sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Real Estate Legal Support</h3>
              <p className="text-muted-foreground mb-6">
                Planning a property transaction or development project? Our expert real estate team can help ensure a smooth process.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Property Due Diligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Transaction Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">RERA Compliance</span>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                Get Property Legal Help
              </Button>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Property transaction assistance
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

export default RealEstateLaw;