import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Scale, Phone, Mail, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Civil Defense', href: '/services/civil-defense' },
    { name: 'Criminal Defense', href: '/services/criminal-defense' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Real Estate Law', href: '/services/real-estate-law' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RP Legal Associates</h1>
              <p className="text-xs text-muted-foreground">Excellence in Legal Practice</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="hero" size="sm" className="ml-4">
              Get Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-elegant">
            <nav className="flex flex-col space-y-4 p-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-4">
                <span className="text-sm font-medium text-muted-foreground">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Button variant="hero" size="sm" className="w-full mt-4">
                Get Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Quick Contact Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@rplegalassociates.com</span>
              </div>
            </div>
            <div className="text-xs">
              Available 24/7 for Emergency Legal Consultation
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;