import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, AlertTriangle, Scale } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem('rp-legal-disclaimer-accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rp-legal-disclaimer-accepted', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a different page or show a message
    alert('You must accept the disclaimer to continue using our website.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-hero text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">RP Legal Associates</h2>
              <p className="text-white/90">Excellence in Legal Practice</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold text-foreground">Important Legal Disclaimer</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            <strong>Please read this disclaimer carefully before proceeding:</strong>
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">No Attorney-Client Relationship:</h4>
              <p className="text-muted-foreground text-sm">
                The information provided on this website does not create an attorney-client relationship between you and RP Legal Associates.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">No Legal Advice:</h4>
              <p className="text-muted-foreground text-sm">
                Content on this website is for general informational purposes only and should not be considered legal advice for any specific situation.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">Confidentiality Warning:</h4>
              <p className="text-muted-foreground text-sm">
                Do not send us confidential information until an attorney-client relationship has been established through formal engagement.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">Jurisdiction:</h4>
              <p className="text-muted-foreground text-sm">
                Our practice is primarily governed by Indian laws. Laws vary by jurisdiction and may not apply to your situation.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">No Guarantee:</h4>
              <p className="text-muted-foreground text-sm">
                Past results do not guarantee future outcomes. Each legal matter is unique.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground mb-1">Consultation Required:</h4>
              <p className="text-muted-foreground text-sm">
                Always consult with a qualified attorney for specific legal matters and before making any legal decisions.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic mb-6 bg-muted p-4 rounded-lg">
            By clicking "I Agree and Continue", you acknowledge that you have read, understood, and agree to this disclaimer.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={handleAccept}
            >
              ✓ I Agree and Continue
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleDecline}
            >
              ✗ I Do Not Agree
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;