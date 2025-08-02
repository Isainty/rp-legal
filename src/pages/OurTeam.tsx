import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Rajesh Patel',
      designation: 'Senior Partner & Founder',
      experience: '25+ Years Experience',
      specialization: 'Corporate Law, M&A, Securities Law',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/rajeshpatel',
      twitter: 'https://twitter.com/rajeshpatel',
      email: 'rajesh@rplegalassociates.com',
      bio: 'Rajesh has over 25 years of experience in corporate law and has advised numerous Fortune 500 companies on complex transactions and regulatory matters.'
    },
    {
      name: 'Priya Sharma',
      designation: 'Partner',
      experience: '18+ Years Experience',
      specialization: 'Family Law, Civil Disputes, Women Rights',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/priyasharma',
      twitter: 'https://twitter.com/priyasharma',
      email: 'priya@rplegalassociates.com',
      bio: 'Priya is renowned for her expertise in family law and has successfully handled over 500 cases with a focus on protecting women\'s rights.'
    },
    {
      name: 'Arjun Mehta',
      designation: 'Senior Associate',
      experience: '12+ Years Experience',
      specialization: 'Criminal Defense, Constitutional Law',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/arjunmehta',
      twitter: 'https://twitter.com/arjunmehta',
      email: 'arjun@rplegalassociates.com',
      bio: 'Arjun specializes in criminal defense and constitutional law with a track record of winning complex high-profile cases.'
    },
    {
      name: 'Kavita Singh',
      designation: 'Associate',
      experience: '8+ Years Experience',
      specialization: 'Real Estate, Property Law, Banking',
      image: 'https://images.unsplash.com/photo-1594736797933-d0fa47d3641a?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/kavitasingh',
      twitter: 'https://twitter.com/kavitasingh',
      email: 'kavita@rplegalassociates.com',
      bio: 'Kavita has extensive experience in real estate transactions and banking law, having advised on property deals worth over ₹1000 crores.'
    },
    {
      name: 'Rohit Kumar',
      designation: 'Junior Associate',
      experience: '5+ Years Experience',
      specialization: 'Contract Law, Intellectual Property',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/rohitkumar',
      twitter: 'https://twitter.com/rohitkumar',
      email: 'rohit@rplegalassociates.com',
      bio: 'Rohit focuses on contract law and intellectual property matters, helping startups and established businesses protect their innovations.'
    },
    {
      name: 'Neha Agarwal',
      designation: 'Junior Associate',
      experience: '4+ Years Experience',
      specialization: 'Employment Law, Labor Disputes',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/nehaagarwal',
      twitter: 'https://twitter.com/nehaagarwal',
      email: 'neha@rplegalassociates.com',
      bio: 'Neha specializes in employment law and has successfully resolved numerous labor disputes for both employers and employees.'
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
            <span className="text-foreground">Our Team</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Expert Legal Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced legal professionals who are dedicated to providing exceptional 
            legal services with integrity, expertise, and commitment to our clients' success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-hero p-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.designation}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-secondary font-medium mb-4">{member.specialization}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={member.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Contact Button */}
              <Button variant="outline" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-card rounded-2xl p-12 shadow-elegant">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced team is ready to provide you with expert legal guidance and representation. 
            Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              <a href="tel:+919876543210" className="flex items-center">
                Call +91-9876543210
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;