import React from 'react';
import { Scale, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'Corporate Law',
    'Civil Defense',
    'Criminal Defense',
    'Family Law',
    'Real Estate Law'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#about' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Scale className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">RP Legal Associates</h3>
                  <p className="text-primary-foreground/80">Excellence in Legal Practice</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
                With over 25 years of expertise, we provide exceptional legal services across diverse 
                practice areas. Our commitment to excellence and client satisfaction has made us one 
                of India's most trusted law firms.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a href="tel:+919876543210">+91-9876543210</a>
                </div>
                <div className="flex items-center space-x-3 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                  <a href="mailto:info@rplegalassociates.com">info@rplegalassociates.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                 {quickLinks.map((link, index) => (
                   <li key={index}>
                     {link.href.startsWith('/') ? (
                       <Link 
                         to={link.href} 
                         className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                       >
                         <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                         {link.name}
                       </Link>
                     ) : (
                       <a 
                         href={link.href} 
                         className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                       >
                         <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                         {link.name}
                       </a>
                     )}
                   </li>
                 ))}
              </ul>

              <div className="mt-8">
                <h5 className="font-semibold mb-4">Emergency Legal Help?</h5>
                <a href="tel:+919876543210" className="block">
                  <Button variant="secondary" size="sm" className="w-full">
                    Call Now: +91-9876543210
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70">
              © 2025 RP Legal Associates. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <span>Available 24/7 for Emergency Legal Consultation</span>
              <span>|</span>
              <span>Pan India Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;