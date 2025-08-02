import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Scale } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Trusted Partner for{' '}
              <span className="text-primary">Comprehensive Legal Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              With over 25 years of expertise, we provide exceptional legal services across diverse practice areas. 
              Our commitment to excellence and client satisfaction has made us one of India's most trusted law firms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <Button variant="hero" size="lg" className="group">
                  Get Legal Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Legal Experts</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image/Illustration */}
          <div className="lg:flex justify-center items-center hidden">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-hero rounded-2xl shadow-glow flex items-center justify-center">
                <div className="text-white text-center">
                  <Scale className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Justice & Excellence</h3>
                  <p className="text-white/90">Committed to protecting your rights</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-xl shadow-elegant flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-foreground">Pan India</div>
                  <div className="text-sm text-secondary-foreground/80">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;