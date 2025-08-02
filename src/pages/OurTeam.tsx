import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Mr. Ratan Prasad',
      designation: 'Founder & Senior Associate',
      experience: '12+ Years Experience,
      specialization: 'Member of ILI New Delhi',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/rajeshpatel',
      twitter: 'https://twitter.com/rajeshpatel',
      email: 'rajesh@rplegalassociates.com',
      bio: 'As the visionary founder of RP Legal Associates, Mr. Ratan Prasad has built the firm from the ground up since 2012. His extensive experience and strategic leadership have been instrumental in establishing our reputation as a trusted legal partner across India.'
    },
    {
      name: 'Mr. Ranjit Prasad',
      designation: 'Founder & Associate',
      experience: '7+ Years Experience',
      specialization: 'Member AWFTC of High Court, Ranchi',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/priyasharma',
      twitter: 'https://twitter.com/priyasharma',
      email: 'priya@rplegalassociates.com',
      bio: 'With his unique combination of legal and technical expertise, Mr. Ranjit Prasad brings invaluable insights to complex cases involving technology, intellectual property, and corporate matters. His diverse educational background enables comprehensive legal solutions.'
    },
    {
      name: 'Sachin Kumar',
      designation: 'Associate Member',
      experience: '10+ Years Experience',
      specialization: 'LLB, Patna High Court',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/arjunmehta',
      twitter: 'https://twitter.com/arjunmehta',
      email: 'arjun@rplegalassociates.com',
      bio: 'Sachin Kumar is a dedicated advocate with extensive experience in criminal defense and Civil Defense. His strong courtroom presence and thorough case preparation have resulted in numerous successful outcomes for our clients.'
    },
    {
      name: 'Binod Pandit',
      designation: 'Associate',
      experience: '5+ Years Experience',
      specialization: 'Advocate',
      image: 'https://images.unsplash.com/photo-1594736797933-d0fa47d3641a?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/kavitasingh',
      twitter: 'https://twitter.com/kavitasingh',
      email: 'kavita@rplegalassociates.com',
      bio: 'Binod Pandit specializes in family law matters and alternative dispute resolution. His compassionate approach and skilled negotiation abilities make him particularly effective in sensitive family and matrimonial cases.'
    },
    {
      name: 'Saurabh Xess',
      designation: 'Associate',
      experience: '5+ Years Experience',
      specialization: 'Jharkhand High Court',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/rohitkumar',
      twitter: 'https://twitter.com/rohitkumar',
      email: 'rohit@rplegalassociates.com',
      bio: 'Saurabh Xess brings expertise in corporate law and property matters to our team. His attention to detail and comprehensive understanding of business law make him an asset in complex commercial transactions.'
    },
    {
      name: 'Krishna Mohan Pandey',
      designation: 'Executive Manager',
      experience: '7+ Years Experience',
      specialization: 'MBA & CA',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/nehaagarwal',
      twitter: 'https://twitter.com/nehaagarwal',
      email: 'neha@rplegalassociates.com',
      bio: 'Krishna Mohan Pandey is not only an experienced accountant but a very able organiser and propagator of ideas for team at RP Legal Assosiates. He often collaborates with advocates to give our clients a satisfactory outcome.'
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
